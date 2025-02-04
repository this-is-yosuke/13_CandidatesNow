import React from 'react';
import { useEffect, useState } from 'react';
import PotentialsCard from '../components/PotentialsCard';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {

  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnCandidateList: boolean | null | undefined,
    login: string | null
  ) => {
    e.preventDefault();
    if(currentlyOnCandidateList){

      let parsedPotentialCandidates: Candidate[] = [];
      const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
      if(typeof storedPotentialCandidates === 'string'){
        parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
      };
  
      parsedPotentialCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.login !== login
      );
  
      setPotentialCandidates(parsedPotentialCandidates);
      localStorage.setItem(
        'potentialCandidates',
        JSON.stringify(parsedPotentialCandidates)
      );
    };
  }
  
    useEffect(() => {
      const parsedPotentialCandidates = JSON.parse(
        localStorage.getItem('potentialCandidates') as string
      );
      setPotentialCandidates(parsedPotentialCandidates);
    }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {(!potentialCandidates?.length || potentialCandidates.length === 0) ? (
        <h1>Add candidates you are interested in here.</h1>
      ) : (
        <PotentialsCard
          potentialCandidates={potentialCandidates}
          removeFromStorage={removeFromStorage}
          />
      )}
    </>
  );
};

export default SavedCandidates;
