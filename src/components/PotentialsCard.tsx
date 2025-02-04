import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface PotentialsProps {
    potentialCandidates: Candidate[];
    removeFromStorage:
        | ((
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            currentlyAddedCandidate: boolean | null | undefined,
            login: string | null
        ) => void)
        | null;
}

const PotentialsCard = ({
    potentialCandidates,
    removeFromStorage,
}: PotentialsProps) => {
    return (
        <ul>
            {potentialCandidates.map((candidate) => (
                <CandidateCard
                    currentCandidate={candidate}
                    key={candidate.login}
                    onCandidateList={true}
                    removeFromStorage={removeFromStorage}
                />
            ))}
        </ul>
    );
};

export default PotentialsCard;