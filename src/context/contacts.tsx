import React, { createContext, useContext, useState, ReactNode } from "react";
import { CONTACTS_MOCK, Contact } from "@/mocks/contacts";

interface ContactsContextData {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (id: string, contact: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
  getContact: (id: string) => Contact | undefined;
}

const ContactsContext = createContext<ContactsContextData>({} as ContactsContextData);

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>(CONTACTS_MOCK);

  const addContact = (contact: Contact) => {
    setContacts((prev) => [contact, ...prev]);
  };

  const updateContact = (id: string, updatedData: Partial<Contact>) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
    );
  };

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const getContact = (id: string) => {
    return contacts.find((c) => c.id === id);
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact, getContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
