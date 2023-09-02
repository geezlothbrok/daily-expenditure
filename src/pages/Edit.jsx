// import React, { useState } from 'react'

// function Edit({itemOrService,
//     expenseDate,
//     expenseAmount,
//     notes,
//     category,}) {
//     const [updatedItemOrService, setUpdatedItemOrService] = useState(itemOrService);
//   const [updatedExpenseDate, setUpadtedExpenseDate] = useState(expenseDate); 
//   const [updatedExpenseAmount, setUpdatedExpenseAmount] = useState(expenseAmount);
//   const [updatedCategory, setUpdatedCategory] = useState(category);
//   const [UpdatedNotes, setUpdatedNotes] = useState(notes);
//   const [isLoading, setIsLoading] = useState(false);
//   return (
    
//     <div>
        
//         <form className="add" >
       
//           <label>Item Purchased or Service</label>
//           <input
//             type="text"
//             name="itemOrService"
//             placeholder="Please key in your purchased item or services here"
//             inputMode="text"
//             value={updatedItemOrService}
//             onChange={(e) => setUpdatedItemOrService(e.target.value)}
           
//           />

//           <label>Date</label>
//           <input
//             type="date"
//             name="expenseDate"
//             value={updatedExpenseDate}
//             onChange={(e) => setUpadtedExpenseDate(e.target.value)}
//           />

//           <label>Amount GHc</label>
//           <input
//             type="number"
//             name="expenseAmount"
//             inputMode="numeric"
//             value={updatedExpenseAmount}
//             onChange={(e) => setUpdatedExpenseAmount(e.target.value)}
//           />

//           <label>Note</label>
//           <textarea
//           spellCheck={true}
//             name="expenseNote"
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Add your Notes here..."
//             value={UpdatedNotes}
//             onChange={(e) => setUpdatedNotes(e.target.value)}
//           ></textarea>

//           <select name="category" value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)} >
//             <option value="" disabled>
//               Choose Category
//             </option>
//             <option value="food and drinks">Food and Drinks</option>
//             <option value="maintenance">Maintenance</option>
//             <option value="transportation">transportation</option>
//             <option value="house and rent">House and Rent</option>
//             <option value="miscellaneous">Miscellaneous</option>
//             <option value="fashion">Fashion</option>
//             <option value="education">Education</option>
//             <option value="health">Health</option>
//             <option value="utilities">Utilities</option>
//             <option value="electronics">Electronics</option>
//           </select>
//           <button type="submit"  id="submit">
//             S a v e
//           </button>
//         </form>
//     </div>
//   )
// }

// export default Edit