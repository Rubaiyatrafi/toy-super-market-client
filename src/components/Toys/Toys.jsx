/* eslint-disable react/prop-types */
const Toys = ({ toys }) => {
  //   const {
  //     name,
  //     photo,
  //     seller,
  //     email,
  //     category,
  //     quantity,
  //     price,
  //     ratings,
  //     description,
  //   } = toys;
  return (
    <table className="  w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>company</th>
          <th>location</th>
          <th>Last Login</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <th>{name}</th>
          <td>{email}</td> */}
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td>Blue</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Toys;
