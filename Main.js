import image1 from './DMV_Logo.png';

const Main = () =>{

    return(

        <div className="maindiv">
            <div className="imgdiv">
                <img src={image1} width="400" heigth="400" />
            </div>
            
            <div class="tablediv">
                <table>
                <tr>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>DMV Staff</th>
                </tr>
                <tr>
                    <td>Nov</td>
                    <td>17</td>
                    <td>9:00 AM</td>
                    <td>John Doe</td>
                </tr>
                <tr>
                    <td>Dec</td>
                    <td>10</td>
                    <td>12:00 PM</td>
                    <td>Mark Weller</td>
                </tr>
                </table>
            </div>
        </div>


    );
}

export default Main;