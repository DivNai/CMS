// src/components/ComplaintForm.jsx
import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    registeredContactNo: '',
    address: '',
    product: '',
    natureOfComplaint: '',
    complaintReceivedFrom: '',
    warrantyStatus: '',
    dateOfInstallation: '',
  });

  const [files, setFiles] = useState({
    siteImage: null,
    invoiceCopy: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Files:", files);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contactPerson: '',
      registeredContactNo: '',
      address: '',
      product: '',
      natureOfComplaint: '',
      complaintReceivedFrom: '',
      warrantyStatus: '',
      dateOfInstallation: '',
    });
    setFiles({ siteImage: null, invoiceCopy: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-indigo-600">Complaint Registration Form</h2>
          <button type="button" className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-8">
            <button type="button" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              <span className="text-xl">+</span> New Complaint Registration
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Name *</label>
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Contact Person *</label>
              <input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Enter contact person name" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Registered Contact No. *</label>
              <input required name="registeredContactNo" value={formData.registeredContactNo} onChange={handleChange} placeholder="Enter registered contact number" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Address *</label>
              <input required name="address" value={formData.address} onChange={handleChange} placeholder="Enter address" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Product *</label>
              <input required name="product" value={formData.product} onChange={handleChange} placeholder="Enter product name" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Nature of Complaint *</label>
              <input required name="natureOfComplaint" value={formData.natureOfComplaint} onChange={handleChange} placeholder="Enter nature of complaint" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Complaint Received From/ किसके द्वारा *</label>
              <input required name="complaintReceivedFrom" value={formData.complaintReceivedFrom} onChange={handleChange} placeholder="Enter complaint received from" className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Site/Product Image (if any)</label>
              <input type="file" name="siteImage" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 border border-gray-300 rounded-md p-1" />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Warranty Status *</label>
              <select required name="warrantyStatus" value={formData.warrantyStatus} onChange={handleChange} className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                <option value="">Select warranty status...</option>
                <option value="In-Warranty">In Warranty</option>
                <option value="Out-of-Warranty">Out of Warranty</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Date of Installation *</label>
              <input required type="date" name="dateOfInstallation" value={formData.dateOfInstallation} onChange={handleChange} className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div className="space-y-1 lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700">Copy of Invoice/चालान की प्रति *</label>
              <input required type="file" name="invoiceCopy" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 border border-gray-300 rounded-md p-1" />
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-end gap-4">
            <button type="button" onClick={handleReset} className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              <span className="rotate-180">↺</span> Reset Form
            </button>
            <button type="button" className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-600 text-white rounded-md font-medium hover:bg-slate-700 transition-colors">
              <span>✕</span> Cancel
            </button>
            <button type="submit" className="flex items-center justify-center gap-2 px-8 py-2.5 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors shadow-md">
              <span>🔖</span> Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;