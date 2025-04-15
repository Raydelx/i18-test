import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import LiabilityModal from './LiabilityModal';

import './formStyles.css'; // Importa tu archivo CSS

const ClientForm = () => {
  // Estado para manejar los clientes
  const [clients, setClients] = useState([{ name: '', date: '' , weight: '', height: '' }]);
  const [formMessage, setFormMessage] = useState('');

   // Estado para manejar los campos de actividad y fecha
  const [activityName, setActivityName] = useState('');
  const [activityDate, setActivityDate] = useState('');
  const [activityEmail, setActivityEmail] = useState('');
  const [activityPhone, setActivityPhone] = useState('');
  const [activityNationality, setActivityNationality] = useState('');
  const [activityPersonName, setActivityPersonName] = useState('');
  const [activityTotal, setActivityTotal] = useState('');
  const [language, setLanguage] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiabilityChecked, setIsLiabilityChecked] = useState(false);
  const [formMessage2, setFormMessage2] = useState('');
  
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleCheckboxChange = (e) => setIsLiabilityChecked(e.target.checked);
  
    

  // Función para añadir un nuevo cliente
  const addClient = () => {
    setClients([...clients, { name: '', date: '', weight: '', height: ''  }]);
  };

  // Función para eliminar un cliente
  const removeClient = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
  };

  // Función para manejar el cambio en los campos de nombre y email
  const handleChange = (index, event) => {
    const updatedClients = clients.map((client, i) => {
      if (i === index) {
        return { ...client, [event.target.name]: event.target.value };
      }
      return client;
    });
    setClients(updatedClients);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLiabilityChecked) {
      setFormMessage2('You must accept the liability terms to proceed.');
      return;
    }
    // Formatear los datos de los clientes en un formato legible
    const formattedClients = clients
      .map(client => `Name: ${client.name}\nDate of birth: ${client.date}\nWeight: ${client.weight}\nHeight: ${client.height}`)
      .join('\n\n'); // Unir clientes con doble salto de línea

    // Preparar el objeto para enviar
    // e1368d60-eed2-4455-a494-1dd150659cf8---raydel pass key
    //e851d321-0271-42c5-a243-3d405050de0f---montaraz pass key
    const formData = {
      access_key: 'e851d321-0271-42c5-a243-3d405050de0f', // Reemplaza con tu clave de Web3Forms
      activity: `Name: ${activityPersonName}\n
      Email: ${activityEmail}\n
      Phone Number: ${activityPhone}\n
      Nationality: ${activityNationality}\n
      Activity Name: ${activityName}\n
      Date of Joining: ${activityDate}\n
      How many persons: ${activityTotal}\n
      Language: ${language}`, // Datos de la actividad
      participantes: formattedClients, // Incluir los clientes formateados en el campo 'message'
    };

    try {
      await axios.post('https://api.web3forms.com/submit', formData, {
        headers: {
          'Content-Type': 'application/json', // Asegurar que se envíe como JSON
        },
      });
      setFormMessage('Formulario enviado con éxito.');
      setClients([{ name: '', date: '', weight: '', height: ''  }]); // Resetear el formulario
      setActivityName(''); // Resetear nombre de actividad
      setActivityDate(''); // Resetear fecha de actividad
      setActivityEmail('');
      setActivityNationality('');
      setActivityPhone('');
      setActivityPersonName('');
      setActivityTotal('');
    } catch (error) {
      setFormMessage('Hubo un error al enviar el formulario.');
    }

    
    
  };

  return (
    <div>
      <form className='' onSubmit={handleSubmit}>
        {/* Campos para la actividad y la fecha */}
        <div className='grid md:grid-cols-2 gap-2 mt-10'>
          <div className='mb-2'>
          <label htmlFor="Name">Full name</label>
          <input
            id='Name'
            type="text"
            name="activityPersonName"
            placeholder="Jhon Snow"
            className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
            value={activityPersonName}
            onChange={(e) => setActivityPersonName(e.target.value)}
            required
          />
        </div>
        <div className='mb-2'>
        <label htmlFor="activityEmail">Enter your email</label>
          <input
          id='activityEmail'
            type="email"
            name="activityEmail"
            placeholder="jhonsnow@gmail.com"
            className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
            value={activityEmail}
            onChange={(e) => setActivityEmail(e.target.value)}
            required
          />
        </div></div>
        <div className='grid md:grid-cols-3 gap-2'>
            <div className='mb-2'>
            <label htmlFor="activityPhone">Phone number</label>
            <input
              id='activityPhone'
              type="phone"
              name="activityPhone"
              placeholder="+34 000 00 00 00"
              className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
              value={activityPhone}
              onChange={(e) => setActivityPhone(e.target.value)}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="Nationality">Nationality</label>   
            <input
              id="Nationalit"
              list="Nationality"
              name="Which experience are you looking for?"
              placeholder="Select an option"
              className="w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              value={activityNationality}
              onChange={(e) => setActivityNationality(e.target.value)}
            />
            <datalist id="Nationality">
              <option value="United States">United States</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antartica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo">Congo, the Democratic Republic of the</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cota D'Ivoire">Cote d'Ivoire</option>
              <option value="Croatia">Croatia (Hrvatska)</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="France Metropolitan">France, Metropolitan</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
              <option value="Holy See">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran (Islamic Republic of)</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
              <option value="Korea">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao">Lao People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia, Federated States of</option>
              <option value="Moldova">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
              <option value="Saint Lucia">Saint LUCIA</option>
              <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia (Slovak Republic)</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="St. Helena">St. Helena</option>
              <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan, Province of China</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania, United Republic of</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Viet Nam</option>
              <option value="Virgin Islands (British)">Virgin Islands (British)</option>
              <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
              <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Serbia">Serbia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </datalist>
          </div>
          
          <div className='mb-2'>
            <label htmlFor="language">What language do you speak?</label>
              <input
                id='language'
                type="text"
                name="language"
                placeholder="Dutch"
                className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
              />
          </div>
        </div>
        
        <div className='grid md:grid-cols-3 gap-2'>
          <div className='mb-2'>
            <label htmlFor="activityName">Name of Activity</label>
          <input
            id='activityName'
            type="text"
            name="activityName"
            
            placeholder="Select activity"
            className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            required
          />
        </div>
        <div className='mb-2'>
        <label htmlFor="activityDate">Date of joinig the activity</label>
          <input
          id='activityDate'
            type="date"
            name="activityDate"
            placeholder="Date of joining the activity"
            className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
            required
          />
        </div>
        <div className='mb-2'>
        <label htmlFor="activityNumber">How many persons</label>
          <input
          id='activityNumber'
            type="number"
            name="activityTotal"
            placeholder="8"
            className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
            value={activityTotal}
            onChange={(e) => setActivityTotal(e.target.value)}
            required
          />
        </div></div>
        


        <div className='flex  m-auto align-middle gap-4 pt-7 pb-2'>
          <h2 className='text-3xl  font-semibold'> Participants</h2>
          <button className='bg-[#0E46A3]  text-white hover:bg-[#074173]  border-2 border-transparent rounded 
        text-center transition focus-visible:ring-2 ring-offset-2 p-1 ring-gray-200' 
        type="button" 
        onClick={addClient}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path></svg>
        </button>
        </div>
        
      
        {clients.map((client, index) => (
          <div className='flex flex-col md:flex-row gap-2 mb-2' key={index} >
            <div><label htmlFor="name">Name</label>
            <input
            id='name'
              type="text"
              name="name"
              placeholder="Nombre"
              className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
              value={client.name}
              onChange={(e) => handleChange(index, e)}
              required
            /></div>
            
            <div className='flex flex-col md:flex-row  gap-2'>
              <div>
              <label htmlFor="date">Date of Birth</label>
              <input
              id='date'
              type="date"
              name="date"
              placeholder="Date of birth"
              className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
              value={client.date}
              onChange={(e) => handleChange(index, e)}
              required
            />
            </div>
              <div>
                <label htmlFor="weight">Weight (Only cycle tours)</label>
                <input
                id='weight'
                  type="number"
                  name="weight"
                  placeholder="Weight in Kg"
                  className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
                  value={client.weight}
                  onChange={(e) => handleChange(index, e)}
                  
                />
              </div>
              <div>
              <label htmlFor="height">Height (Only cycle tours)</label>
              <input
                id='height'
                type="number"
                name="height"
                placeholder="Height in meters"
                className='w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
                value={client.height}
                onChange={(e) => handleChange(index, e)}
                
              />
              </div>
            </div>
            
            <div className='md:self-end'>
              <button className='bg-[#a30e0e] text-white mt-2 hover:bg-red-600 border-transparent rounded focus-visible:ring-2 p-2 md:p-3  ring-offset-2 ring-gray-200' type="button" onClick={() => removeClient(index)}>
            <svg className='text-white hidden md:block m-auto' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M216,40H68.53a16.08,16.08,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11A16.08,16.08,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM61.67,204.12,68.53,200h0ZM216,200H68.53l-43.2-72,43.2-72H216ZM106.34,146.34,124.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128l18.35,18.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z"></path></svg>
            <span className=' md:hidden m-auto'>Delete participant</span>
            </button>
            </div> 
          </div>
        ))}
        <div className='mt-8'>
        <div className="mb-5">
            <label htmlFor="liability" className="flex items-center">
              <input
                type="checkbox"
                id="liability"
                required
                checked={isLiabilityChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <p>I accept the <button type="button" className="text-blue-500 underline" onClick={handleModalOpen}> liability terms</button></p>
              
            </label>
          </div>
        
        {formMessage2 && <p>{formMessage2}</p>}
        <LiabilityModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>
               
        <button className='bg-[#0E46A3] text-white hover:bg-[#074173]  border-2 border-transparent rounded text-center transition focus-visible:ring-2 ring-offset-2 mt-4 px-6 py-3 ring-gray-200' type="submit">Send</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
    </div>
  );
};

export default ClientForm;
