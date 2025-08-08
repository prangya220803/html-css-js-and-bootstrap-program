var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("Contact with ID ".concat(contact.id, " added successfully."));
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.error("Error: Contact with ID ".concat(id, " not found."));
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact with ID ".concat(id, " modified successfully."));
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.error("Error: Contact with ID ".concat(id, " not found."));
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact with ID ".concat(id, " deleted successfully."));
    };
    return ContactManager;
}());
// Testing the ContactManager class
var manager = new ContactManager();
// Adding contacts
manager.addContact({ id: 1, name: "Alice", email: "alice@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "Bob", email: "bob@example.com", phone: "9876543210" });
// Viewing contacts
console.log("All Contacts:", manager.viewContacts());
// Modifying a contact
manager.modifyContact(1, { email: "alice.new@example.com" });
// Attempt to modify a non-existent contact
manager.modifyContact(3, { name: "Charlie" });
// Deleting a contact
manager.deleteContact(2);
// Attempt to delete a non-existent contact
manager.deleteContact(3);
// Viewing final contacts
console.log("Final Contacts:", manager.viewContacts());
