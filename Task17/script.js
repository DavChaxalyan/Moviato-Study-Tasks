// const comments = [
//     {
//       id: 1,
//       text: "This is the first comment",
//       parentId: null,
//       replies: [
//         {
//           id: 2,
//           text: "This is a reply to the first comment",
//           parentId: 1,
//           replies: [
//             {
//               id: 3,
//               text: "This is a nested reply",
//               parentId: 2,
//               replies: []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 4,
//       text: "This is an independent comment",
//       parentId: null,
//       replies: []
//     },
// ];
  
// function generateDiv(comment, margin) {
//     const div = document.createElement('div');
//     div.className = 'comment comment' + margin;
//     div.style.marginLeft = `${margin * 20}px`; 
//     div.textContent = comment.text;
//     document.querySelector('body').append(div)
//   }
  
//   function displayComments(comments, nestingLevel) {  
//     comments.forEach(comment => {   
//       generateDiv(comment, nestingLevel + 1);
//       if (comment.replies.length > 0) {
//         displayComments(comment.replies, nestingLevel + 1);
//       }
//     });
//   }
  
//   displayComments(comments, 0);
