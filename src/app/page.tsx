import FeatureProducts from "@/components/FeaturedProducts/FeatureProducts";
import Header from "@/components/Header.tsx/Header";
import Offer from "@/components/Offer/Offer";
import Image from "next/image";

export default function Home() {
  return ( 


    <>

<main className=" flex flex-col gap-20">

<Header/>

<FeatureProducts/>

<Offer/>

</main>
    
    </>
 
  );
}




// import { useMutation } from 'react-query';
// import axios from 'axios';

// const postData = async (payload) => {
//   const response = await axios.post('https://example.com/api/endpoint', payload);
//   return response.data;
// };

// function MultipleRequestsComponent() {
//   const mutation = useMutation(postData);

//   const payloads = [
//     { id: 1, name: "Payload 1" },
//     { id: 2, name: "Payload 2" },
//     { id: 3, name: "Payload 3" },
//   ];

//   const sendMultipleRequests = () => {
//     payloads.forEach((payload) => {
//       mutation.mutate(payload, {
//         onSuccess: (data) => {
//           console.log('Request successful:', data);
//         },
//         onError: (error) => {
//           console.error('Request failed:', error);
//         },
//       });
//     });
//   };

//   return (
//     <div>
//       <button onClick={sendMultipleRequests}>Send Requests</button>
//       {mutation.isLoading && <p>Sending requests...</p>}
//     </div>
//   );
// }
