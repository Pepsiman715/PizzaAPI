import {useEffect, useState} from 'react'
//modal 
import ReactModal from 'react-modal';
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import {  setOrders , deleteOrder} from '../../features/pizza/pizzaSlice';
import {Button} from '../Button/Button'
import Images from '../Images/Images'
import {MdOutlineRemoveCircle} from 'react-icons/md';
import Nothing from '../Images/pizza.png'
import { Link } from 'react-router-dom';

type order = {
  name: string;
  style: string;
  id: string;
  address: string;
  crust: string; 
  cheese: boolean;
}



export default function Orders() {
  //redux useSelector hook
	const tasks = useAppSelector((state) => state.pizza.incomingOrder);
  //length of state
  const [ length, setLength ] = useState(tasks.length);
  //loading and deleting icon
  const [ loading, setLoading] = useState(false); 
  const [ deleting, setDeleting ] = useState(true); 
	//redux dispatch hook
	const dispatch = useDispatch()
    //load data from api
    useEffect(() => {
      api.get(`/orders`)
      .then(async (res) => {
        if(res.status === 200){
 
          await dispatch(setOrders(res.data))
          setLoading(true);
        }
      }).catch((err) => {console.log(err)})
    },[])
    
    //delete orders by taking id as param
    const deleteOrderFunc = (id : string) => {
      console.log(id);
      api.delete(`/orders/${id}`)
      .then( async (res) => {
        if(res.status === 200) {
          
          await dispatch(deleteOrder(id));
          console.log(tasks);
          setDeleting(true);
        }
      }).catch(error => console.log(error))
  
    }
  return (
    <div>
     

      {/* when loading is set to false then show loading icon */}
       {!loading ? <h1>Loading</h1>  : 
       //loop through all items in the array of objects
      tasks.map(( order : any , i : number) => {
 
        const orderRecieved: order = {
          name: order.name,
          id: order.id,
          crust: order.crust,
          cheese: order.cheese,
          address: order.address,
          style: order.style,
        }

        
        return (
        //return a container for each order retrieved
          <div key={i} className='border shadow m-5 rounded p-1 h-40'>

          <div className="flex column h-full font-Quicksand">

            <div className="border w-2/4 h-full p-5">
              <h3 className="font-bold text-sm">Order ID:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.id} </span></h3>
              <h3 className="font-bold text-sm">Order Name:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.name}</span></h3>
              <h3 className="font-bold text-sm">Order address:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.address}</span></h3>
              <h3 className="font-bold text-sm">Order Style:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.style}</span></h3>
            </div>

            <div className="border w-1/4 h-full p-5">
              <h3 className="font-bold text-sm">Order Crust: <span className="font-Quicksand text-xs font-normal">{orderRecieved.crust}</span></h3>
              <h3 className="font-bold text-sm">Order Cheese:<span className="font-Quicksand text-xs font-normal">{orderRecieved.cheese ? ' Yes cheese' : ' No cheese'}</span> </h3>
            </div>

            <div className="flex flex-wrap border h-full justify-center column w-1/4 text-center">
            {/* pass the syle as a prop */}
              <div className="h-70  w-full p-5">
                <Images style={orderRecieved.style}></Images>
                
              </div>

              <div className="border h-auto w-full h-30 ">
              <Button onClick={() => deleteOrderFunc(orderRecieved.id)} className="uppercase h-5 w-20 flex leading-3 font-Quicksand mx-auto"></Button>
              </div>
            </div>
            
          </div>
          
          </div>

        )
        })}
      {tasks.length > 0 ? console.log(tasks.length) :
      <div className="mx-auto w-90" style={{display : loading ? "block" : "none"}}>
      <div>
        <img className='mx-auto lg:w-6/12 lg:p-5' src={Nothing}  />
        <h3 className='text-center font-Quicksand text-xl font-black'>No orders made</h3>
       <div className='text-center'>
        <Link to='/get-your-pizza'><Button  className="mb-4 md:w-2/12 md:ml-auto uppercase">Get Your Pizza</Button></Link>
        </div>
       </div>
      </div>
      }
    </div>

  )

}
const svgAnimation = () => {

  return(
    
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: crispedges;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.39866255144032925s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(11.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.3858024691358025s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(22.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.3729423868312758s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(33.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.360082304526749s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(45 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.34722222222222227s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(56.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.33436213991769553s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(67.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.32150205761316875s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(78.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.308641975308642s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.2957818930041153s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(101.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.2829218106995885s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(112.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.27006172839506176s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(123.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.25720164609053503s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(135 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.24434156378600827s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(146.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.2314814814814815s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(157.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.21862139917695475s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(168.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.20576131687242802s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.19290123456790126s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(191.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.1800411522633745s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(202.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.16718106995884777s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(213.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.154320987654321s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(225 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.14146090534979425s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(236.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.12860082304526751s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(247.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.11574074074074076s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(258.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.10288065843621401s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.09002057613168725s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(281.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.0771604938271605s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(292.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.06430041152263376s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(303.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.051440329218107005s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(315 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.03858024691358025s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(326.25 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.025720164609053502s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(337.5 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="-0.012860082304526751s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(348.75 50 50)">
  <rect x="49.5" y="28" rx="0.5" ry="0.74" width="1" height="2" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.41152263374485604s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>
  )
}