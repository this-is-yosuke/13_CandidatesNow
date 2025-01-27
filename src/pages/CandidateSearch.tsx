// import { useState, useEffect } from 'react'; useEffect appears unneeded
import { useState } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API'; searchGithubUser is seemingly useless
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [currentCandidate, setCandidate] = useState<Candidate>({
    Image: '',
    Name: '',
    Location: '',
    Email: '',
    Company: '',
    Bio: '',
  });

  // Retieving list of candidates from localStorgae and appending a new profile
  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if(typeof storedPotentialCandidates === 'string'){
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
  }

  // Since the app loads profiles RANDOMLY, I don't need seachInput, do I? I think I need to use an onLoad event
  const loadRandomProfile = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data: Candidate = await searchGithub();
    setCandidate(data);
  };

  return (
  <>
    <section>
      <h1>CandidateSearch</h1>
    </section>
    <CandidateCard
    currentCandidate={currentCandidate}
    addToPotentialCandidates={addToPotentialCandidates}
    loadRandomProfile={loadRandomProfile}
    />
    <section>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) =>{
        loadRandomProfile(event);
      }}></button>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) =>{
        loadRandomProfile(event); addToPotentialCandidates();
      }}></button>
    </section>
  </>
)
};

export default CandidateSearch;
