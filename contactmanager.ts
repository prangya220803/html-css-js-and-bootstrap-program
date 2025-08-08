interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

class ContactManager {
    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`Contact with ID ${contact.id} added successfully.`);
    }

    viewContacts(): Contact[] {
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);
        if (!contact) {
            console.error(`Error: Contact with ID ${id} not found.`);
            return;
        }

        Object.assign(contact, updatedContact);
        console.log(`Contact with ID ${id} modified successfully.`);
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`Error: Contact with ID ${id} not found.`);
            return;
        }

        this.contacts.splice(index, 1);
        console.log(`Contact with ID ${id} deleted successfully.`);
    }
}

// Testing the ContactManager class
const manager = new ContactManager();

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