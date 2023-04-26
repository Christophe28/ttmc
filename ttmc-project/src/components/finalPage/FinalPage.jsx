import React, { useState } from 'react';

// Pictures
// import test from "../../assets/trophee.png";
import tropheeImg from '../../assets/trophee.png'
import trashImg from '../../assets/poubelle.png'
import socleImg from '../../assets/soclePodium.png'
import projecteurImg from '../../assets/projecteur.png'
import projecteurMirroirImg from '../../assets/projecteur-mirroir.png'

const FinalPage = () => {
  const [showColumns, setShowColumns] = useState(false);

  function setColumns() { setTimeout(() => {
    setShowColumns(true);
  },5000 )}

  setColumns()
  return (
    <div className='wrapEndPage'>
      <img className='trophee1' src={tropheeImg} alt="trophée" />
      <h2>Podium</h2>
      <img className='trophee2' src={tropheeImg} alt="trophée" />
      <div>
      <div className='rayon'></div>
      <img className='projo' src={projecteurImg} alt="projecteur" />
      </div>
      <div>
      <div className='rayon2'></div>
      <img className='projo2' src={projecteurMirroirImg} alt="projecteur" />
      </div>

      <div className='wrapperColumns'>
      <div className='column2'> <h4>2ème</h4> </div>
        <div className='column1'> <h4>1er</h4> </div>
        <div className='column3'> <h4>3ème</h4> </div>
      </div>
      <img className='socleImg1' src={socleImg} alt="socle podium" />
      <img className='socleImg2' src={socleImg} alt="socle podium" />
        <img className='trashImg' src={trashImg} alt="poubelle" />
        <div className='wrapperButtons'>
        </div>
    </div>
  );
};

export default FinalPage;