exports.getContact = (req, res) => {
  const { email } = req.query;

  // Simulated contact data
  const contacts = {
    'john.doe@example.com': {
      name: 'John Doe',
      title: 'Senior Product Manager',
      department: 'Product',
      phone: '+27 11 345 6987'
    },
    'jane.smith@example.com': {
      name: 'Jane Smith',
      title: 'Lead Engineer',
      department: 'Engineering',
      phone: '+27 234 5678'
    }
  };

  const contact = contacts[email];
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }

  res.json(contact);
};