import { useEffect, useState } from "react";
import axios from "axios";

function ContactList({ refresh }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  // Fetch contacts on load & refresh
  useEffect(() => {
    fetchContacts();
  }, [refresh]);

  // Delete contact
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      fetchContacts(); // refresh list after delete
    } catch (error) {
      alert("Failed to delete contact");
    }
  };

  // Loading state
  if (loading) {
    return (
      <p className="mt-6 text-gray-500 text-center">Loading contacts...</p>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Submitted Contacts
      </h3>

      {contacts.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No contacts have been submitted yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{contact.name}</td>
                  <td className="px-4 py-3">{contact.email}</td>
                  <td className="px-4 py-3">{contact.phone}</td>
                  <td className="px-4 py-3">{contact.message || "-"}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ContactList;
