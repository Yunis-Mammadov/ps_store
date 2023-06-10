const ContactModel = require("../models/contact.model")

const contactController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const contact = await ContactModel.find()
        if (!name) {
            res.status(200).send(contact)
        } else {
            const searchedContact = contact.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searchedContact)
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const contact = await ContactModel.findById(id)
        res.status(200).send(contact)
    },
    delete: async (req, res) => {
        const id = req.params.id
        const contact = await ContactModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${contact.name} deleted successfully!`
        })
    },
    post: async (req, res) => {
        const { instagram, facebook, twitter } = req.body
        const newContact = new ContactModel({
            instagram: instagram,
            facebook: facebook,
            twitter: twitter
        })
        await newContact.save()
        res.status(201).send({
            message: `${newContact.name} posted successfully!`,
            contact: newContact
        })
    },
    edit: async (req, res) => {
        const id = req.params.id
        const { name } = req.body
        const updatingContact = {
            instagram: instagram,
            facebook: facebook,
            twitter: twitter
        }
        const contact = await ContactModel.findByIdAndUpdate(id, updatingContact)
        res.status(200).send({
            message: `${contact.name} update successfully!`,
        })
    }
}


module.exports = contactController