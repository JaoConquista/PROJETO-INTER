from flask import Flask,request,render_template,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import jsonify


app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"]= "sqlite:///app.db"

db = SQLAlchemy(app)


#cadastro de clientes
class cadastrar_clientes(db.Model):
    __tablename__="cadastro_cliente"
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    cpf = db.Column(db.String(11))
    senha = db.Column(db.String(6))
    endereco = db.Column(db.String(200))

    def __str__(self):
        return self.id

#cadastro de produtos
class cadastro_produtos(db.Model):
    __tablename__="cadastro_produto"
    id = db.Column(db.Integer, primary_key=True)
    produto = db.Column(db.String(50))
    quantidade_entrada = db.Column(db.Integer)
    tipo_vinho = db.Column(db.String(50))
    data_validade = db.Column(db.String(15))

    def __str__(self):
        return self.id

#rota Home
@app.route("/", methods=["GET", "POST"])
def home():
    return


#rota cadastro cliente
@app.route("/cadas_cliente", methods=["GET","POST"])
def cadas_cliente():
    if request.method == "POST":

        print(request.form)
        print(request.method)

        name = request.json["nome"]
        cpf = request.json["cpf"]
        senha = request.json["pwd"]
        endereco = request.json["endereco"]
 
        salvar = cadastrar_clientes()
        salvar.nome = name
        salvar.cpf = cpf
        salvar.senha = senha
        salvar.endereco = endereco
        db.session.add(salvar)
        db.session.commit()
    
    consultas = cadastrar_clientes.query.all()
    return (
        
        jsonify(
            nome = request.json["nome"],
            cpf = request.json["cpf"],
            senha = request.json["pwd"],
            endereco = request.json["endereco"]
        )
    )

#rota cadastro consulta
@app.route("/cadas_produto", methods=["POST"])
def cadas_produto():
    if request.method== "POST":
        produto = request.json["produto"]
        quantidade = request.json["qtd"]
        tipo_vinho = request.json["tipo"]
        data_validade = request.json["data"]

        salvar = cadastro_produtos()
        salvar.produto = produto
        salvar.quantidade_entrada = quantidade
        salvar.tipo_vinho = tipo_vinho
        salvar.data_validade = data_validade
        db.session.add(salvar)
        db.session.commit()

    return (
        jsonify(
            produto = request.json['produto'],
            tipo = request.json['tipo'],
            data = request.json['data'],
            qtd = request.json['qtd']
        )
    )

@app.route("/cadas_produto", methods=["GET"])
def get_cadas_produto() :
        consultas = cadastro_produtos.query.all()
        produtos = []
        for consulta in consultas:
            produtos.append({
                "produto": consulta.produto,
                "tipo": consulta.tipo_vinho,
                "data": consulta.data_validade,
                "qtd": consulta.quantidade_entrada
            })
        return jsonify(produtos)


#deletar
@app.route("/delete/<int:id>")
def delete(id):
    consulta_cli = cadastrar_clientes.query.get(id)
    db.session.delete(consulta_cli)
    db.session.commit
    return redirect(url_for('cadas_clientes'))


if __name__ == "__main__":
    app.run(debug=True)
