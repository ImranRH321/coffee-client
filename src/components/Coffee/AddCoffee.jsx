import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    // if (name && quantity && supplier && taste && category && details && photo) return

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    //  send data server save to database
    fetch(`http://localhost:5000/coffee`, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(newCoffee)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data server save to database");
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'user added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset()
        }
      });
  };

  const makeBg = {
    // backgroundColor: "#F4F3F0",
    backgroundColor: "#C9C0BB",
  };
  return (
    <div style={makeBg}>
      <div className="p-5 shadow-lg">
        <h1 className="text-3xl text-center  py-5">Add New Coffee</h1>
        <p className="text-center p-4">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
        onSubmit={handleAddCoffee}
        class="grid sm:grid-cols-1 md:grid-cols-2 gap-5 m-12"
      >
        <div class="mb-4">
          <label for="name" class="block font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full rounded-lg border-black py-2 px-3 focus:outline-none focus:border-lime-500"
          />
        </div>

        <div class="mb-4">
          <label for="chef" class="block font-bold mb-1">
            available quantity:
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* <div class="mb-4">
          <label for="chef" class="block font-bold mb-1">
            Chef:
          </label>
          <input
            type="text"
            id="chef"
            name="chef"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div> */}

        <div class="mb-4">
          <label for="supplier" class="block font-bold mb-1">
            Supplier:
          </label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="taste" class="block font-bold mb-1">
            Taste:
          </label>
          <input
            type="text"
            id="taste"
            name="taste"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="category" class="block font-bold mb-1">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="details" class="block font-bold mb-1">
            Details:
          </label>
          <input
            type="text"
            name="details"
            required
            class="w-full rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4 col-span-2">
          <label for="photo" class="block font-bold mb-1">
            Photo:
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            required
            class="w-full  rounded-lg border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button type="submit" class="col-span-2 btn btn-primary">
          Add Coffee
        </button>
      </form>
      ;
    </div>
  );
};

export default AddCoffee;
