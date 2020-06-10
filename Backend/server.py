from flask import Flask
from flask import request
import json
import random
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
import datetime
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/black-box"
mongo = PyMongo(app)

#current_students

@app.route('/register/current',methods=['POST'])
def register_current_students():
    data = dict()
    data['name'] = request.json['name']
    data['batch'] = request.json['batch']
    data['student_code'] = request.json['student_code']
    data['mobile'] = int(request.json['mobile'])
    data['email'] = request.json['email']
    data['password'] = request.json['password']
    data['attendence'] = []

    find_email = mongo.db.students.find_one({"email": data['email']})
    if find_email != None:
        return dumps({"message": "Email already in use"})
    else:
        mongo.db.students.insert_one(data)
        return dumps({"message": "User Created"})

@app.route('/show/current')
def show_current_students():
    data = dict()
    data= mongo.db.students.find({})
    return dumps (data)


@app.route('/dashboard/current/<ObjectId:id>')
def show_one_current(id):
    data = mongo.db.students.find_one({"_id":id})
    return dumps(data)

@app.route('/show/performance/<ObjectId:id>')
def show_perfromance_current(id):
    data = mongo.db.students.find_one({"_id":id})
    return dumps(data)


#placed Students
@app.route('/register/placed',methods=["POST"])
def register_placed_students():
    data = dict()
    data['name'] = request.json['name']
    data['batch'] = request.json['batch']
    data['student_code'] = request.json['student_code']
    data['company'] = request.json['company']
    data['designation'] = request.json['designation']
    data['email'] = request.json['email']
    data['password'] = request.json['password']
    data['payment'] = []

    find_email = mongo.db.placed.find_one({"email": data['email']})
    if find_email != None:
        return dumps({"message": "Email already in use"})
    else:
        mongo.db.placed.insert_one(data)
        return dumps({"message": "User Created"})

@app.route('/show/placed')
def show_placed_students():
    data = dict()
    data= mongo.db.placed.find({})
    return dumps (data)

@app.route('/dashboard/placed/<ObjectId:id>')
def show_one_placed(id):
    data = mongo.db.placed.find_one({"_id":id})
    return dumps(data)


#mentor
@app.route('/mentor/register',methods=["POST"])
def mentor_register():
    data = dict()
    data['name'] = request.json['name']
    data['designation'] = request.json['designation']
    data['mobile'] = int(request.json['mobile'])
    data['email'] = request.json['email']
    data['password'] = request.json['password']

    find_email = mongo.db.mentor.find_one({"email": data['email']})
    if find_email != None:
        return dumps({"message": "Email already in use"})
    else:
        mongo.db.mentor.insert_one(data)
        return dumps({"message": "User Created"})


@app.route('/show/mentor')
def show_mentors():
    data = dict()
    data = mongo.db.mentor.find({})
    return dumps (data)

@app.route('/dashboard/mentor/<ObjectId:id>')
def show_one_mentor(id):
    data = mongo.db.mentor.find_one({"_id":id})
    return dumps(data)

#login
@app.route('/auth/login',methods=["POST"])
def login():
    data = dict()
    email = request.json['email']
    password = request.json['password']
    status = request.json['status']

    if status == 'current':
        USER = mongo.db.students.find_one({"email": email,"password":password})
        if USER != None:
            return dumps({"id": USER['_id']})
        else:
            return dumps({"message": "invalid credentials"})

    elif status == 'placed':
        USER = mongo.db.placed.find_one({"email": email,"password":password})
        if USER != None:
            return dumps({"id": USER["_id"]})
        else:
            return dumps({"message": "invalid credentials"})

    elif status == 'mentor':
        USER = mongo.db.mentor.find_one({"email": email,"password":password})
        if USER != None:
            return dumps({"id": USER['_id']})
        else:
            return dumps({"message": "invalid credentials"})


@app.route('/edit/isa/<ObjectId:id>',methods=["POST"])
def show(id):
    data = {}
    user = mongo.db.placed.find_one({"_id":id})
    if len(user['payment']) == 0:
        data["date"] = request.json['date']
        data['amount'] = int(request.json['amount'])
        data['image'] = request.json['image']
        
        data = mongo.db.placed.update_one({"_id":id},{"$push":{"payment":{"date":data['date'],"amount":data['amount'],"image":data['image']}}})
        mongo.db.placed.update_one({"_id":id},{"$set":{"total":request.json['amount']}})
        return dumps({"data":"done"})
    else:
        user = mongo.db.placed.find_one({"_id":id})
        date = datetime.datetime.now()
        amount = int(request.json['amount'])
        data['image'] = request.json['image']
        mongo.db.placed.update_one({"_id":id},{"$push":{"payment":{"date":date,"amount":int(request.json['amount']),"image":request.json['image']}}})
        mongo.db.placed.update_one({"_id":id},{"$set":{"total":int(user['total']) + int(request.json['amount'])}})
        return dumps ({"message":"updated"})


#taking web cam photo
@app.route('/camera/<ObjectId:id>',methods=["POST"])
def camera(id):
    date = request.json['date']
    url = request.json['url']

    data=mongo.db.students.update_one({"_id":id},{"$push":{"attendence":{"date":date, "url":url}}})
    return dumps({"message" : "uploaded!"})


#storing data for each student
@app.route("/add/data/<ObjectId:id>",methods=["POST"])
def add_data(id):
    data = dict()
    data['day'] = request.json['day']
    data['total_question'] = int(request.json['total_question'])
    data['comp_question'] = int(request.json['comp_question'])

    mongo.db.students.update_one({"_id":id},{"$push":{"performance":{"date":request.json['day'],"total_ques":int(request.json['total_question']),"solved":int(request.json['comp_question'])}}})
    return dumps({"message": "record updated"})