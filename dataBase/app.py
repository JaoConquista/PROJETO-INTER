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


#CLIENTE
@app.route("/cadas_cliente", methods=["POST"])
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

@app.route("/cadas_cliente", methods=["GET"])
def get_cadas_cliente() :
    consultas = cadastrar_clientes.query.all()
    client = []
    for data in consultas :
        client.append({
            "id": data.id,
            "nome": data.nome,
            "senha": data.senha,
            "cpf": data.cpf,
            "endereco": data.endereco
        })
    return jsonify(client)

#PRODUTOS
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
                "id": consulta.id,
                "produto": consulta.produto,
                "tipo": consulta.tipo_vinho,
                "data": consulta.data_validade,
                "qtd": consulta.quantidade_entrada
            })
        return jsonify(produtos)

#editar
@app.route("/cadas_produto/<int:id>", methods=["PUT"])
def editar_produto(id):
    produto = cadastro_produtos.query.get(id)

    if not produto:
        return jsonify({"erro": "Produto não encontrado"}), 404

    produto.produto = request.json.get("produto", produto.produto)
    produto.quantidade_entrada = request.json.get("qtd", produto.quantidade_entrada)
    produto.tipo_vinho = request.json.get("tipo", produto.tipo_vinho)
    produto.data_validade = request.json.get("data", produto.data_validade)

    db.session.commit()

    return jsonify({"mensagem": "Produto atualizado com sucesso!"})

#deletar
@app.route("/cadas_produto/delete/<int:id>", methods=["DELETE"])
def delete(id):
    consulta_produto = cadastro_produtos.query.get(id)
    db.session.delete(consulta_produto)
    db.session.commit()

    return ' ', 204

if __name__ == "__main__":
    app.run(debug=True)
