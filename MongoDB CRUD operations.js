{// Create a database called "contact"
    use contact
}

{// Create a collection called "contactlist" + Insert these documents in "contactlist"
    db.contactlist.insert([{lastName:'Ben lahmer', firstName:'fares', email:'fares@gmail.com', age:26}, {lastName:'kefi', firstName:'seif', email:'kefi@gmail.com', age:15},{lastName:'Fatnassi', firstName:'sarra', email:'sarra@gmail.com', age:40},{lastName:'Ben yahia', firstName:'rym', age:4}, {lastName:'Cherif', firstName:'sami', age:3} ])
}

{//Display all of the contacts list
    db.contactlist.find()
}

{//Display all the information about only one person using his ID.
    db.contactlist.findOne({_id: ObjectId("621f728ec694ad7cafef8b73")})
}

{//Display all the contacts with an age >18.
    db.contactlist.find({age:{$gt:18}})
}

{//Display all the contacts with an age>18 and name containing "ah".
    db.contactlist.find({$and:[{age:{$gt:18}},{'$expr':{'$regexMatch':{'input':{'$concat':['$firstName',' ', '$lastName']}, 'regex': 'ah', 'options': 'i' } }}]})
}

{//Change the contact's first name from"Kefi Seif" to "Kefi Anis".
    db.contactlist.update({lastName: 'kefi'},{$set:{firstName: 'Anis'}})
}

{//Delete the contacts that are aged under <5.
    db.contactlist.remove({age:{$lt: 5}})
}

{//Display all of the contacts list
    db.contactlist.find()
}