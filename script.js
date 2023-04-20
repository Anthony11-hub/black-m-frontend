// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// js for items row
// Get the container element and the items inside it
// const container = document.querySelector('.pro-container');
// const items = container.querySelectorAll('.pro');

// const containerWidth = container.offsetWidth;
// const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginLeft) + parseFloat(getComputedStyle(items[0]).marginRight);
// const itemsPerRow = Math.floor(containerWidth / itemWidth);

// for (let i = 0; i < items.length; i += itemsPerRow) {
//   const rowItems = Array.from(items).slice(i, i + itemsPerRow);
//   if (rowItems.length < itemsPerRow) {
//     const empty = document.createElement('div');
//     empty.classList.add('empty');
//     rowItems[rowItems.length - 1].after(empty);
//   }
// }

// ===================================modified
// Get the container element and the items inside it
// const container = document.querySelector('.pro-container');
// const items = container.querySelectorAll('.pro');

// const containerWidth = container.offsetWidth;
// const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginLeft) + parseFloat(getComputedStyle(items[0]).marginRight);
// const itemsPerRow = Math.floor(containerWidth / itemWidth);

// for (let i = 0; i < items.length; i += itemsPerRow) {
//   const rowItems = Array.from(items).slice(i, i + itemsPerRow);
//   const lastItem = rowItems[rowItems.length - 1];
//   if (lastItem) {
//     const emptyCount = itemsPerRow - rowItems.length + 2;
//     for (let j = 0; j < emptyCount; j++) {
//       const empty = document.createElement('div');
//       empty.classList.add('empty');
//       lastItem.after(empty);
//     }
//   }
// }



// Get the container element and the items inside it
const container = document.querySelector('.pro-container');
const items = container.querySelectorAll('.pro');

// Calculate the number of items per row based on the container width and the item width
const containerWidth = container.offsetWidth;
const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginLeft) + parseFloat(getComputedStyle(items[0]).marginRight);
const itemsPerRow = Math.floor(containerWidth / itemWidth);

// Check the screen width and adjust the number of empty elements accordingly
let emptyCount = 3; // default value
if (itemsPerRow === 2 && window.innerWidth < 768) {
  emptyCount = 1;
}

// Loop through the items and add the appropriate number of empty elements after the last item in each row
for (let i = 0; i < items.length; i += itemsPerRow) {
  const rowItems = Array.from(items).slice(i, i + itemsPerRow);
  const lastItem = rowItems[rowItems.length - 1];
  if (lastItem) {
    for (let j = 0; j < emptyCount; j++) {
      const empty = document.createElement('div');
      empty.classList.add('empty');
      lastItem.after(empty);
    }
  }
}


