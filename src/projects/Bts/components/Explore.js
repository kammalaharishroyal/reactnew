import logo1 from '../Images/react-logo.png';
import Card from './Card';
function dynname() {
    const c = [
    { name: 'Harish', mobile: '9347779216', mail: 'harish@gmail.com', prof: { logo1 } ,status:0},
    { name: 'prasad', mobile: '9611339390', mail: 'prasad@gmail.com', prof: { logo1 } ,status:1},
    { name: 'Pavan', mobile: '9392885930', mail: 'pavan@gmail.com', prof: { logo1 },status:0 },
    { name: 'Hari B', mobile: '8096661990', mail: 'harib@gmail.com', prof: { logo1 },status:1 },
    { name: 'renuka', mobile: '6362988798', mail: 'renuka@gmail.com', prof: { logo1 } ,status:1},
    { name: 'Narendra', mobile: '9347263005', mail: 'naredra@gmail.com', prof: { logo1 },status:0 },
    { name: 'Raghava', mobile: '6361522156', mail: 'raghava@gmail.com', prof: { logo1 },status:1 }
    ];

    return c.map(x => { return (<Card name={x.name} mobile={x.mobile} mail={x.mail} prof={x.logo1} status={x.status} /> )  });

}
let c = dynname();

function Page2() {
    return (
        <div>


            <body className="body">

                <div className="cards">
                    {c}

                </div>

            </body>





        </div>



    );
}
export default Page2;