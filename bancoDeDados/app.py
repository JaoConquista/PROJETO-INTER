from flask import Flask,request,render_template,redirect,url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
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
        name = request.form["nome"]
        cpf = request.form["cpf"]
        senha = request.form["pwd"]
        endereco = request.form["Endereco"]

        salvar = cadastrar_clientes()
        salvar.nome = name
        salvar.cpf = cpf
        salvar.senha = senha
        salvar.endereco = endereco
        db.session.add(salvar)
        db.session.commit()
    
    consultas = cadastrar_clientes.query.all()
    return render_template("cadastro_cliente.html", consultas=consultas)


#rota cadastro consulta
@app.route("/cadas_produto", methods=["GET", "POST"])
def cadas_produto():
    if request.method== "POST":
        produto = request.form["produto"]
        quantidade = request.form["qtd"]
        tipo_vinho = request.form["tipo"]
        data_validade = request.form["data"]

        salvar = cadastro_produtos()
        salvar.produto = produto
        salvar.quantidade_entrada = quantidade
        salvar.tipo_vinho = tipo_vinho
        salvar.data_validade = data_validade
        db.session.add(salvar)
        db.session.commit()
    
    consultas = cadastro_produtos.query.all()
    return render_template("cadastro_produto.html", consultas=consultas)


#deletar
@app.route("/delete/<int:id>")
def delete(id):
    consulta_cli = cadastrar_clientes.query.get(id)
    db.session.delete(consulta_cli)
    db.session.commit
    return redirect(url_for('cadas_clientes'))


if __name__ == "__main__":
    app.run(debug=True)

