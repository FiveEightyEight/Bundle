const fs = require("fs");
/*

ITEM ARRAYS

*/

// OLD ITEMS BELOW
/*
const clothing = [
  "Shirts",
  "Tops",
  "Socks",
  "Bra",
  "Underwear",
  "Belt",
  "Dress",
  "Long Pants",
  "Hat",
  "Cap",
  "Beanie",
  "Flip-Flops",
  "Sandals",
  "Shoes",
  "Boots",
  "Short Pants",
  "Skirt",
  "Bathing Suit",
  "Towel",
  "Pajamas",
  "Long Underwear",
  "Leggings",
  "Sweater",
  "Small Bag",
  "Purse",
  "Large Bag",
  "Bookbag",
  "Light Jacket",
  "Rain Coat",
  "Heavy Jacket",
  "Scarf",
  "Gloves"
];

const accessories = [
  "Reading Glasses",
  "Sunglasses",
  "Pocketknife",
  "Luggage Label",
  "Earplugs",
  "Wallet",
  "Pen",
  "Umbrella",
  "Travel Pillow"
];

const electronics = [
  "Tripod",
  "Mobile Phone",
  "Camera",
  "SD Card",
  "Laptop",
  "Tablet",
  "USB Stick",
  "Cellphone Charger",
  "Laptop",
  "Tablet Charger",
  "Headphones",
  "Travel Adaptor"
];

const personals = [
  "Toothbrush",
  "Toothbrush Cover",
  "Floss",
  "Toothpaste",
  "Mouthwash",
  "Conditoner",
  "Shower Gel",
  "Shampoo",
  "Fragrance",
  "Sunscreen",
  "Sun Tan Lotion",
  "Condoms",
  "Hair Gel",
  "Spray",
  "Brush",
  "Cream",
  "Eye Mask",
  "Nail Clippers",
  "Q-tips",
  "Pocket Mirror",
  "Hair-dryer",
  "Shaving Gel",
  "Glasses",
  "Hand Sanitizer",
  "Contacts",
  "Contacts Solution",
  "Hair Ties",
  "Razor",
  "Makeup",
  "Jewelery",
  "Tampons",
  "Pads",
  "Deodorant"
];

const documents = [
  "Photocopies of Documents",
  "ID",
  "Tickets",
  "Passport",
  "Identity Card",
  "Visa",
  "Driver's License",
  "Wallet",
  "International Driver's License",
  "Boarding Pass",
  "Vouchers",
  "Travel Insurance Documents",
  "Vaccination Card",
  "Money",
  "Cash",
  "Foreign",
  "Currency",
  "Credit Card",
  "Debit Card",
  "Notebook",
  "Guidebook",
  "Printed Trip Itinerary",
  "Accommodation Reservation",
  "Contact Information",
  "Book"
];

const firstAid = [
  "Pain Killers",
  "Medications",
  "Patches",
  "Vitamins",
  "Drugs",
  "Prescriptions",
  "Tweezers"
];

const essentials = ["House Key", "Money Belt"];

const children = [
  "Onesies",
  "Socks",
  "Trousers",
  "Long Sleeve Shirts",
  "Sweater",
  "Jacket",
  "Raincoat",
  "Bathing Suit",
  "Hat",
  "Pajamas",
  "Shoes",
  "Boots"
];

const backpack = [
  "Travel Pillow",
  "Book",
  "Kindle",
  "Phone",
  "Phone Charger",
  "Portable Charger",
  "Snacks",
  "Blanket",
  "Camera",
  "Candy",
  "Chapstick",
  "Charger",
  "Headphones",
  "Glasses",
  "Gum",
  "Mints",
  "Hand-Sanitizer",
  "Earbuds",
  "iPhone Charger",
  "Laptop",
  "Lip Balm",
  "Lotion",
  "Money",
  "Notebook",
  "Pen",
  "Phone",
  "Tissue",
  "Water Bottle"
];

*/
const clothing = [
  {
    name: "Shirts",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/shirt.png?alt=media&token=b072c88c-a329-4f07-955e-3903279fa77e",
    quantity: { 2: 2, 4: 4, 7: 6, 10: 7, 14: 8 },
    bag_type: "checked"
  },
  {
    name: "Socks",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sock.png?alt=media&token=fa42adad-5caa-43d3-bc63-fcc26bc08ea9",
    quantity: { 2: 2, 4: 4, 7: 6, 10: 7, 14: 7 },
    bag_type: "checked"
  },
  {
    name: "Underwear",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/underwear.png?alt=media&token=687f5e59-a702-4730-b674-236d28c5e203",
    quantity: { 2: 2, 4: 4, 7: 7, 10: 9, 14: 10 },
    bag_type: "checked"
  },
  {
    name: "Belt",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/belt.png?alt=media&token=dbb07857-b0ee-403f-91fb-d2c3d99d22f9",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Dress",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/dress.png?alt=media&token=c869166e-f582-43ad-b695-1c0161c03b5f",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 2, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Pants",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/pants.png?alt=media&token=13e62e49-d4f7-486f-a3f0-cfd3aa762978",
    quantity: { 2: 1, 4: 2, 7: 3, 10: 4, 14: 5 },
    bag_type: "checked"
  },
  {
    name: "Hat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/hat.png?alt=media&token=a8a76328-0c04-4b79-aff8-ac953f632e95",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Sandals",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sandals.png?alt=media&token=837fe3d3-cc4e-45e6-8aee-e584a121b0ba",
    quantity: { 2: 0, 4: 0, 7: 0, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Shoes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/shoes.png?alt=media&token=a1682692-ffca-4899-809c-081a37837cff",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 2, 14: 2 },
    bag_type: "checked"
  },
  {
    name: "Shorts",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/shorts.png?alt=media&token=a661c273-ac4d-4899-9f02-b83e52353a6e",
    quantity: { 2: 1, 4: 2, 7: 2, 10: 3, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Skirt",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/skirt.png?alt=media&token=4702d590-355b-4cfe-b1de-8eeef387bcda",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 2, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Bathing Suit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/bathingSuit.png?alt=media&token=c9508a8c-4101-47ef-9e64-fa2c4e749970",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 3, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Towel",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/towels.png?alt=media&token=371063d9-975c-44ce-8abc-67f6ef697369",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 2, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Pajamas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/pajamas.png?alt=media&token=290f9404-ad7d-4a5b-b667-4c18db4a8fae",
    quantity: { 2: 1, 4: 1, 7: 2, 10: 2, 14: 3 },
    bag_type: "checked"
  },
  {
    name: "Sweater",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sweater.png?alt=media&token=9eb692ee-b3b4-4713-beb2-4cfc70000aa1",
    quantity: { 2: 0, 4: 0, 7: 0, 10: 1, 14: 2 },
    bag_type: "checked"
  },
  {
    name: "Bag",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/bag.png?alt=media&token=3f63e160-2316-472b-8979-f0408d9c3c3c",
    quantity: { 2: 0, 4: 0, 7: 0, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Jacket",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/jacket.png?alt=media&token=fe57c257-d610-4334-be61-c4f0f66c9c1b",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  }
];

const accessories = [
  {
    name: "Glasses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/glasses.png?alt=media&token=f222e7df-6417-4531-a214-b6318747eaec",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Sunglasses",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sunglasses.png?alt=media&token=8c53df04-6df4-4b73-ac88-4cda0f749e39",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Luggage Label",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/label.png?alt=media&token=3489cd68-8078-4327-a2ca-9b24cb8f2aff",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Earplugs",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/earplugs.png?alt=media&token=78a039a7-774e-4b5d-914a-2debf0323de6",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Wallet",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/wallet.png?alt=media&token=ca6096a7-9304-484a-a120-2c8235f2de34",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Pen",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/pen.png?alt=media&token=be77a2a2-f7da-4dcc-b583-e88cf6bbb1bd",
    quantity: { 2: 2, 4: 2, 7: 2, 10: 2, 14: 2 },
    bag_type: "personal"
  },
  {
    name: "Travel Pillow",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/travelPillow.png?alt=media&token=02fe16d2-7fa3-4987-bcc2-0b369a9cd230",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Snacks",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/snacks.png?alt=media&token=d42e4b35-c57f-46a4-85d7-56c5fad550cd",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Book",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/book.png?alt=media&token=e9412139-d9a3-4d0a-bec4-24ad144fefa1",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Blanket",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/blanket.png?alt=media&token=a46f208b-d201-4c40-a1b8-f03114bead16",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Candy",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/candy.png?alt=media&token=988969a6-0fc2-4de4-afd2-b1189be589ff",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Water Bottle",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/waterBottle.png?alt=media&token=9d529798-0c8a-4a8c-8e1d-4442e2209993",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Watch",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/watch.png?alt=media&token=66e086b2-b04e-4b4f-a643-ee7ddbf4fba7",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  }
];

const electronics = [
  {
    name: "Tripod",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/tripod.png?alt=media&token=9c503e82-2e69-48e6-a614-7d32601a3c94",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Mobile Phone",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/phone.png?alt=media&token=8c871aa6-2ee0-485a-a428-dbb2877f6c7e",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Camera",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/camera.png?alt=media&token=9be4d7e7-0868-4787-b822-12e08841ba93",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "SD Card",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sdCard.png?alt=media&token=65039c1c-d198-44f5-8f1e-9964bb694509",
    quantity: { 2: 2, 4: 2, 7: 2, 10: 2, 14: 2 },
    bag_type: "carry-on"
  },
  {
    name: "Laptop",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/laptop.png?alt=media&token=a6162a00-473f-4f76-a58d-186726f5e1a0",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Phone Charger",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/phoneCharger.png?alt=media&token=e9bbe04c-0c86-47a3-9b8f-26a262737126",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Tablet",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/tablet.png?alt=media&token=dc1cde14-c88f-4514-899d-a42ffccb6820",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Tablet Charger",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/charger.png?alt=media&token=090fab62-e271-43ae-9f7c-94a23d740664",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Laptop Charger",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/charger.png?alt=media&token=090fab62-e271-43ae-9f7c-94a23d740664",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Headphones",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/headphones.png?alt=media&token=8d17d4ef-69b2-4d67-a489-9b1b55771f95",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  }
];

const personals = [
  {
    name: "Chapstick",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/chapstick.png?alt=media&token=7429a469-3d3f-4280-b2f4-059fb7a93de8",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Tissue",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/tissues.png?alt=media&token=ea504b51-f1f2-4c43-a71b-4e1c7cde09d0",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Deodorant",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/deodorant.png?alt=media&token=fcb99d56-b561-4cde-b8a4-98a9aeebc74f",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Hair Ties",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/hairTies.png?alt=media&token=293f2923-e8f2-4fa6-a6b8-a30783c1aaf9",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Contacts Solution",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/contactSolution.png?alt=media&token=4fc3b854-9911-4b42-9c7e-d6f7a2d8d15b",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Contacts",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/contacts.png?alt=media&token=77990f97-75a7-482e-9408-b3aba07aeb4e",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Hand Sanitizer",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/handSanitizer.png?alt=media&token=d9f8b183-49f7-4363-b902-a77919dd23f0",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Pocket Mirror",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/mirror.png?alt=media&token=d6fc81af-4c11-4e38-b485-5150b47ec457",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Q-tips",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/qTips.png?alt=media&token=c1db2895-cff3-4aef-be2d-fa8251858be1",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Condoms",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/condom.png?alt=media&token=8f890078-7659-4373-8d78-c358e3f7a413",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Sunscreen",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/sunscreen.png?alt=media&token=f6f07bbe-570d-4391-964b-cebff3519924",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Shampoo",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/conditioner.png?alt=media&token=a800841e-b88c-4ce8-9e05-ed97b3c5aaa5",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Soap",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/soap.png?alt=media&token=9be85a13-6968-449c-849f-f73ca2410665",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Conditoner",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/conditioner.png?alt=media&token=a800841e-b88c-4ce8-9e05-ed97b3c5aaa5",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Mouthwash",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/mouthwash.png?alt=media&token=021e36b3-b050-440a-98ea-3caae04b62e7",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Toothbrush",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/toothbrush.png?alt=media&token=60d79047-9e5d-4769-89a2-ad1e5b774e61",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Toothpaste",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/toothpaste.png?alt=media&token=ed4a2e2b-3cd8-478f-8916-b445f0bfb15e",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Floss",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/floss.png?alt=media&token=68a2bbb2-0b28-4225-b8ef-c6b648b55928",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  },
  {
    name: "Toothbrush Cover",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/toothbrushCover.png?alt=media&token=c555d9c7-fedd-47ce-aae1-7b86758d9e90",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  }
];

const documents = [
  {
    name: "Photocopies of Documents",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/documents.png?alt=media&token=4586aa11-f124-4808-a903-010ed99e775d",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "ID",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/id.png?alt=media&token=c58d9f1d-4c28-445c-a7f1-2e0314a23d73",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Tickets",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/boardingPass.png?alt=media&token=f817dc6f-dea2-4549-83c5-778624616996",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Passport",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/passport.png?alt=media&token=804bf0cd-24fb-4d18-8285-82b5594e6143",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Visa",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/passport.png?alt=media&token=804bf0cd-24fb-4d18-8285-82b5594e6143",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Boarding Pass",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/boardingPass.png?alt=media&token=f817dc6f-dea2-4549-83c5-778624616996",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Travel Insurance Documents",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/documents.png?alt=media&token=4586aa11-f124-4808-a903-010ed99e775d",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Vaccination Card",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/id.png?alt=media&token=c58d9f1d-4c28-445c-a7f1-2e0314a23d73",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "Cash",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/cash.png?alt=media&token=61c6f45a-3fc3-45ee-9a1e-e6dd34b35bdd",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Credit Card",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/creditCard.png?alt=media&token=a2371ada-ca3a-4804-8a6e-a716203e2f9f",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Debit Card",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/debitCard.png?alt=media&token=20165d82-833a-49fc-91d3-152779a43f94",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Contact Information",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/documents.png?alt=media&token=4586aa11-f124-4808-a903-010ed99e775d",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Guidebook",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/Guidebook.png?alt=media&token=157f89cc-8c3d-4a55-95bc-293a2f0f31c3",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "carry-on"
  },
  {
    name: "House Key",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/key.png?alt=media&token=80b5f9d2-5318-4ce0-91e2-0643b5e01de8",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  }
];

const firstAid = [
  {
    name: "Pain Killers",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/painKillers.png?alt=media&token=d95bca56-c211-4b1e-b065-bfe35ca13b69",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Medications",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/vitamins.png?alt=media&token=043320ac-e66c-49f1-84a6-f0ab3928b056",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "personal"
  },
  {
    name: "Vitamins",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bundle-frontend.appspot.com/o/vitamins.png?alt=media&token=043320ac-e66c-49f1-84a6-f0ab3928b056",
    quantity: { 2: 1, 4: 1, 7: 1, 10: 1, 14: 1 },
    bag_type: "checked"
  }
];

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./items.json", (data, err) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
      // else resolve(data)
    });
  });
};

const write = content => {
  // content = content.toString();
  content = JSON.stringify(content);
  return new Promise((resolve, reject) => {
    fs.writeFile("./items.json", content, "utf-8", err => {
      if (err) reject(err);
      else resolve();
    });
  });
};
var array = [];
const buildObjectArray = (category, arr, bag_type) => {
  // const array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    array.push({
      name: item,
      quantity: { 2: 1, 4: 2, 7: 2, 10: 3, 14: 4 },
      bag_type: bag_type,
      category: category
    });
  }
  // return array;
};
// itemsObject = {general:{}};
// itemsObject.general['clothing'] = buildObjectArray('clothing', clothing, 'checked');
// itemsObject.general['accessories'] = buildObjectArray('accessories', accessories, 'personal');
// itemsObject.general['electronics'] = buildObjectArray('electronics', electronics, 'carry-on');
// itemsObject.general['personals'] = buildObjectArray('personals', personals, 'carry-on');
// itemsObject.general['documents'] = buildObjectArray('documents', documents, 'personal');
// itemsObject.general['first-aid'] = buildObjectArray('first-aid', firstAid, 'checked');
// itemsObject.general['essentials'] = buildObjectArray('essentials', essentials, 'carry-on');
// itemsObject.general['children'] = buildObjectArray('children', children, 'checked');
// itemsObject.general['misc'] = buildObjectArray('misc', backpack, 'checked');
const buildNewObjectArray = (category, arr) => {
  // const array = [];
  for (let i = 0; i < arr.length; i++) {
    const { name, image, quantity, bag_type } = arr[i];
    array.push({
      name,
      quantity,
      image,
      bag_type,
      category: category
    });
  }
  // return array;
};

const itemsObject = { general: [] };
// const array = []
// buildObjectArray("clothing", clothing, "checked");
// buildObjectArray("accessories", accessories, "personal");
// buildObjectArray("electronics", electronics, "carry-on");
// buildObjectArray("personals", personals, "carry-on");
// buildObjectArray("documents", documents, "personal");
// buildObjectArray("first-aid", firstAid, "checked");
// buildObjectArray("essentials", essentials, "carry-on");
// buildObjectArray("children", children, "checked");
// buildObjectArray("misc", backpack, "checked");
// const array = []
buildNewObjectArray("clothing", clothing, "checked");
buildNewObjectArray("accessories", accessories, "personal");
buildNewObjectArray("electronics", electronics, "carry-on");
buildNewObjectArray("personals", personals, "carry-on");
buildNewObjectArray("documents", documents, "personal");
buildNewObjectArray("first-aid", firstAid, "checked");

// buildNewObjectArray("essentials", essentials, "carry-on");
// buildNewObjectArray("children", children, "checked");
// buildNewObjectArray("misc", backpack, "checked");
array = array.sort(function(a, b) {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
});
itemsObject.general = array;
// console.log(itemsObject);

write(itemsObject)
  .then(_ => {
    console.log("success!");
    return read();
  })
  .then(data => {
    console.log("data: ", data);
  })
  .catch(err => {
    console.log("err: ", err.toString());
  });
