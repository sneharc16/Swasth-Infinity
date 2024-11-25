import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuth } from '../../store/auth';
import Navbar from '../Navbar/navbar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './home.css'; 



const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Sample data for states and fitness events
const stateData = [
  {
    id: 1,
    name: 'Maharashtra',
    coordinates: [19.7515, 75.7139],
    events: [
      { name: 'Yoga Camp', date: '2024-12-01' },
      { name: 'Marathon', date: '2024-12-05' },
    ],
  },
  {
    id: 2,
    name: 'Karnataka',
    coordinates: [15.3173, 75.7139],
    events: [{ name: 'Cycling Event', date: '2024-12-10' }],
  },
  {
    id: 3,
    name: 'Delhi',
    coordinates: [28.7041, 77.1025],
    events: [{ name: 'Zumba Workshop', date: '2024-12-15' }],
  },
];


const Homesection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {user} = useAuth();

  const activities = [
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd', title: 'Tennis' },
    { img: 'https://media.cnn.com/api/v1/images/stellar/prod/220531190304-woman-meditation-stock.jpg?q=w_1110,c_fill', title: 'Meditation' },
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021', title: 'Running' },
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19', title: 'Cycling' },
    { img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/04/GettyImages-828532530.jpg?w=2560&h=1440&crop=1', title: 'Climbing' },
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478', title: 'Hiking' },
    { img: 'https://www.clistudios.com/wp-content/uploads/2021/06/Alyson-Stoner-the-first-step-Candids-10.10.20-2-scaled.jpg', title: 'Dancing' },
    { img: 'https://www.ruralheritage.com/new_rh_website/images/resources/market_gardening/landing_Pg/mktgardentop_354.jpg', title: 'Gardening' },
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411', title: 'Yoga' },
    { img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9', title: 'Swimming' }
  ];

  const [selectedState, setSelectedState] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const { isLoggedIN } = useAuth();

  return (
    <main1>
      <Navbar />

      <section className="content">
        <div className="left-content">
          <div className="activities">
            <h1>Fitness Activities</h1>
            <div className="activity-container">
              {activities.map((activity, index) => (
                <div key={index} className={`image-container img-${index + 1}`}>
                  <img src={activity.img} alt={activity.title} />
                  <div className="overlay">
                    <h3>{activity.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="left-bottom">
            <div className="weekly-schedule">
              <h1>Global Fitness Events</h1>
              <div style={{ display: 'flex', height: '50vh' }}>
      {/* Map Section */}
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        style={{ width: '70%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* Add Markers for each state */}
        {stateData.map((state) => (
          <Marker
            key={state.id}
            position={state.coordinates}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setSelectedState(state);
              },
            }}
          >
            <Popup>{state.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Details Section */}
      <div style={{ width: '30%', padding: '20px', overflowY: 'auto', borderLeft: '1px solid #ccc' }}>
        {selectedState ? (
          <div>
            <h3>{selectedState.name}</h3>
            <ul>
              {selectedState.events.map((event, index) => (
                <li key={index}>
                  <strong>{event.name}</strong> - {event.date}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Click on a state to see fitness events.</p>
        )}
      </div>
    </div>
            </div>

            <div className="personal-bests">
              <h1>Daily Sustain Count</h1>
              <div className="personal-bests-container">
                <div className="best-item box-one">
                  <p>Carbon Footprint : 1400</p>
                  <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27" alt="" />
                </div>
                <div className="best-item box-two">
                  <p>Daily Step Count : 5000</p>
                  <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a" alt="" />
                </div>
                <div className="best-item box-three">
                  <p>Total Sustain Points : 300</p>
                  <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="user-info">
            <div className="icon-container">
              <i className="fa fa-bell nav-icon"></i>
              <i className="fa fa-message nav-icon"></i>
            </div>
            <h5>{user.firstName}</h5>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/afp_000_9cq7ux_shilpa_shetty_yoga-one_one.jpg?VersionId=DeAg8M98aY9OSz3Z3gVSU84uySM4f245" alt="user" />
          </div>

          <div className="active-calories">
            <h1 style={{ alignSelf: 'flex-start' }}>Active Calories</h1>
            <div className="active-calories-container">
              <div className="box" style={{ '--i': '85%' }}>
                <div className="circle">
                  <h2>85<small>%</small></h2>
                </div>
              </div>
              <div className="calories-content">
                <p><span>Today:</span> 400</p>
                <p><span>This Week:</span> 3500</p>
                <p><span>This Month:</span> 14000</p>
              </div>
            </div>
          </div>

          

          <div className="mobile-personal-bests">
            <h1>Personal Bests</h1>
            <div className="personal-bests-container">
              <div className="best-item box-one">
                <p>Fastest 5K Run: 22min</p>
                <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/05dfc444-9ed3-44cc-96af-a9cf195f5820" alt="" />
              </div>
              <div className="best-item box-two">
                <p>Longest Distance Cycling: 4 miles</p>
                <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9ca170e9-1252-4fa6-8677-36493540c1f2" alt="" />
              </div>
              <div className="best-item box-three">
                <p>Longest Roller-Skating: 2 hours</p>
                <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2a7e787c-c12b-49d2-b7fd-72d2c8a3a434" alt="" />
              </div>
            </div>
            
          </div>
          <div class="friends-activity">
            <h1>Daily Fitness Blogs</h1>
            <div class="card1-container">
              <div class="card1">
                <div class="card1-user-info">
                  <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9290037d-a5b2-4f50-aea3-9f3f2b53b441" alt="" />
                  <h2>Jane</h2>
                </div>
                <img class="card1-img" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bef54506-ea45-4e42-a1b6-23a48f61c5e8" alt="" />
                <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
              </div>

              <div class="card1 card1-two">
                <div class="card1-user-info">
                  <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/42616ef2-ba96-49c7-80ea-c3cf1e2ecc89" alt="" />
                  <h2>Mike</h2>
                </div>
                <img class="card1-img" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2dcc1b94-06c5-4c62-b886-53b9e433fd44" alt="" />
                <p>I just set a new record in cycling: 30 miles!💪</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main1>
  );
}

export default Homesection;
