import { useState, useEffect } from 'react';
import { searchGithubID } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [currentCandidate, setCandidate] = useState<Candidate>({
    login: '',
    name: '',
    id: 0,
    avatar_url: '',
    location: '',
    email: '',
    company: '',
    bio: ''
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

  const loadRandomID = async () => {
    const data: Candidate = await searchGithubID();
    setCandidate(data);
  };

  useEffect(() => {
    loadRandomID();
  }, []);

  return (
  <>
    <section>
      <h1>CandidateSearch</h1>
    </section>
    <CandidateCard
    currentCandidate={currentCandidate}
    addToPotentialCandidates={addToPotentialCandidates}
    loadRandomID={loadRandomID}
    />
  </>
)
};

export default CandidateSearch;
