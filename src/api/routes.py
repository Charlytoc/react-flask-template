"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Plants,Master,Order,Shoe,PlantsTransactions,Category
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from datetime import datetime


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# When you visit this endpoint it will create a test dataset
# Dentro de api/route tenemos 2 argumentos, el primero , el endpoint que queremos expoenr
# el segundo los metodos que se van a aceptar en ese endpoint
@api.route('/', methods=['GET'])
def create_dataset():
    print ("Succesfully Created")
    response_body = {
        "message": "Succesfully Created"
    }

    new_plant0 = Plants(name="Lola", size34=1,size35=34, size36=4, size37=0, size38=5, size39=7, size40=2, size41=0)
    new_plant1 = Plants(name="Doris", size34=0,size35=2, size36=6, size37=2, size38=0, size39=3, size40=4, size41=2)
    new_plant2 = Plants(name="Roselena", size34=3,size35=10, size36=5, size37=3, size38=7, size39=5, size40=2, size41=3)
    new_plant3 = Plants(name="Papa Johns", size34=5,size35=1, size36=3, size37=5, size38=9, size39=0, size40=2, size41=5)

    new_master0= Master(name="Paul" , phone="+506 62502302", alias= "El Zapatero Maestro")
    new_master1= Master(name="Papa Jones" , phone="+1 7076250593", alias= "El papa de Johns el pizzero")
    new_master2= Master(name="Mama Joans" , phone="+1 290 95 95", alias= "Cuando tengas hambre el numero en tu cabeza!")
    new_master3= Master(name="Charly TOC TOC" , phone="+44 123456789", alias= "Los dias libres son para loosers")

    db.session.add(new_plant0)    
    db.session.add(new_plant1)    
    db.session.add(new_plant2)    
    db.session.add(new_plant3)

    db.session.add(new_master0)    
    db.session.add(new_master1)    
    db.session.add(new_master2)    
    db.session.add(new_master3)
    db.session.commit()

    return jsonify(response_body), 200


@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return "The user already exists", 400

    new_user = User(email=email, password=password)
    
    db.session.add(new_user)    
    db.session.commit()

    response_body = "You have created an user"
    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   
    existing_user = User.query.filter_by(email=email).first()

    if existing_user.password != password or existing_user.email != email:
        response_body = "Invalidad credentials"
        return jsonify(response_body), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200


@api.route("/add/plant", methods=["POST"])
def add_plants():
    name = request.json.get("name", None)
    size34 = request.json.get("size34", None)
    size35 = request.json.get("size35", None)
    size36 = request.json.get("size36", None)
    size37 = request.json.get("size37", None)
    size38 = request.json.get("size38", None)
    size39 = request.json.get("size39", None)
    size40 = request.json.get("size40", None)
    print(name,size34)
   
    existing_plant = Plants.query.filter_by(name=name).first()

    if existing_plant:
        return "The plant already registered", 400

    new_plant = Plants(name=name, size34=size34,size35=size35, size36=size36, size37=size37, size38=size38, size39=size39, size40=size40, size41=0)
    
    db.session.add(new_plant)    
    db.session.commit()

    response_body = "You have registered a plant"
    return jsonify(response_body), 200

@api.route("/get/plants", methods=["GET"])
def get_plants():
    plants = Plants.query.all()
    plants_list = [plant.serialize() for plant in plants]
    return jsonify(plants_list), 200


@api.route("/add/master", methods=["POST"])
def add_master():
    name = request.json.get("name", None)
    phone = request.json.get("phone", None)
    alias = request.json.get("alias", None)
   
   
    existing_master= Master.query.filter_by(name=name).first()

    if existing_master:
        return "The master already registered", 400

    new_master= Master(name=name , phone=phone, alias= alias)
    
    db.session.add(new_master)    
    db.session.commit()

    response_body = "You have registered a master"
    return jsonify(response_body), 200


@api.route("/add/order", methods=["POST"])
def add_order():
    plant_id= request.json.get("plant_id", None)
    master_id= request.json.get("master_id", None)
    size = request.json.get("size", None)
    name = request.json.get("name", None)
    phone = request.json.get("phone", None)
    delivery_date = request.json.get("delivery_date", None)
    price = request.json.get("price", None)
    date=datetime.now()
    plant= Plants.query.get(plant_id)
    if size == 34:
        plant.size34 -= 1   
    elif size == 35:
        plant.size35 -= 1
    elif size == 36:
        plant.size36 -= 1
    elif size == 37:
        plant.size37 -= 1
    elif size == 38:
        plant.size38 -= 1
    elif size == 39:
        plant.size39 -= 1
    elif size == 40:
        plant.size40 -= 1
    
    new_order= Order( plant_id=plant_id, master_id=master_id, plant_size =size, customer_name=name, customer_number=phone, delivery_date=delivery_date,price=price,date=date, status="Pendiente")
    
    db.session.add(new_order)    
    db.session.commit()

    response_body = "You have a new order"
    return jsonify(response_body), 200   

@api.route("/get/orders", methods=["GET"])
def get_orders():
    orders = Order.query.all()
    orders_list = []

    for order in orders:
        order_data = order.serialize()
        orders_list.append(order_data)

    response_body = {
        'orders': orders_list
    }

    return jsonify(response_body), 200

@api.route("/add/shoe", methods=["POST"])
def add_model():
    name = request.json.get("name", None)
    size_from = request.json.get("size_from", None)
    size_to = request.json.get("size_to", None)
    category = request.json.get("category", None)
    photo = request.json.get("photo", None)
   

    new_model= Shoe( name =name, size_from=size_from, size_to =size_to ,category =category,photo=photo )
    
    db.session.add(new_model)    
    db.session.commit()

    response_body = "You have a new model"
    return jsonify(response_body), 200
    

@api.route("/update/orders", methods=["POST"])
def update_orders():
    order_data = request.json.get("orders", None)

    if not order_data:
        return jsonify("Invalid request"), 400

    updated_orders = []
    for order in order_data:
        order_id = order.get("id", None)
        new_status = order.get("status", None)

        if not order_id or not new_status:
            return jsonify("Invalid request"), 400

        order = Order.query.filter_by(id=order_id).first()

        if not order:
            return jsonify("Order not found"), 404

        order.status = new_status
        db.session.commit()

        updated_orders.append({
            'id': order.id,
            'status': order.status
        })

    response_body = {
        'updated_orders': updated_orders
    }

    return jsonify(response_body), 200

@api.route("/add/transaction", methods=["POST"])
def add_plant_transaction():
    description = request.json.get("description", None)
    master_id = request.json.get("master_id", None)
    plant_id = request.json.get("plant_id", None)
    size34 = request.json.get("size34", None)
    size35 = request.json.get("size35", None)
    size36 = request.json.get("size36", None)
    size37 = request.json.get("size37", None)
    size38 = request.json.get("size38", None)
    size39 = request.json.get("size39", None)
    size40 = request.json.get("size40", None)
    size41 = request.json.get("size41", None)

    new_transaction = PlantsTransactions(description=description, master_id=master_id, plant_id=plant_id, size34=size34, size35=size35, size36=size36, size37=size37, size38=size38, size39=size39, size40=size40, size41=0)
    db.session.add(new_transaction)
    db.session.commit()
    plant=Plants.query.get(plant_id)
    plant.size34 += size34
    plant.size35 += size35
    plant.size36 += size36
    plant.size37 += size37
    plant.size38 += size38
    plant.size39 += size39
    plant.size40 += size40
    plant.size41 += size41
    db.session.commit()

    response_body = {"message": "Transaction created successfully", "transaction": new_transaction.serialize()}
    return jsonify(response_body), 200

@api.route("/get/plant/types", methods=["GET"])
def get_plants_types():
    plants = Plants.query.all()
    plants_list = [plant.short_serializer() for plant in plants]
    return jsonify(plants_list), 200

@api.route("/get/model/types", methods=["GET"])
def get_model_types():
    models = Shoe.query.all()
    models_list = [model.serialize() for model in models]
    return jsonify(models_list), 200


@api.route("/get/masters", methods=["GET"])
def get_masters():
    masters = Master.query.all()
    masters_list = [master.serialize() for master in masters]
    return jsonify(masters_list), 200

@api.route("/get/transaction/plants", methods=["GET"])
def get_transaction_plants():
    transactions = PlantsTransactions.query.all()
    transaction_list = [transaction.serialize() for transaction in transactions]
    return jsonify(transaction_list), 200

@api.route("/get/shoes", methods=["GET"])
def get_shoes():
    shoes = Shoe.query.all()
    shoes_list = [shoe.serialize() for shoe in shoes]
    return jsonify(shoes_list), 200
