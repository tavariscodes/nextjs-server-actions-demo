'use client'
import { createLoad } from '@/lib/load/actions';
import { experimental_useFormStatus, experimental_useFormState } from 'react-dom'
import name from './page.module.css'

function SubmitButton() {
    const { pending } = experimental_useFormStatus()
    return (
    <button className={name.submitButton} type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

export default function AddLoad() {
const [data, setData] = experimental_useFormState(createLoad, {
    pickupDestination: '',
    deliveryDestination: '',
});

return (
  <div className="container">
  <h1>Add Load</h1>
  <form action={setData}>
      <label>
          Pickup Destination:
          <input 
              type="text" 
              required 
              id='pickupDestination'
              name='pickupDestination'
          />
      </label>
      <label>
          Delivery Destination:
          <input 
              type="text" 
              id='deliveryDestination'
              name='deliveryDestination'
              required 
          />
      </label>
    <SubmitButton/>
  </form>
  <style jsx>{`
      .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: fadeIn 0.5s forwards;

      }
      .container:hover {
        transform: scale(1.02);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
      h1 {
          text-align: center;
          margin-bottom: 30px;
      }
      label {
          display: block;
          margin-bottom: 20px;
      }
      input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s, box-shadow 0.3s;
      }

      input:focus {
        border-color: #007BFF;
        box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        outline: none;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
  `}</style>
</div>
);
}
