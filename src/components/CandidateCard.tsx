import React from 'react'
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    currentCandidate: Candidate;
    removeFromStorage?: | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnCandidateList: boolean | null | undefined,
        name: string | null
    ) => void) | null;
    // The buttons don't appear to be part of the card CHANGED
    addToPotentialCandidates?: (()=>void) | null;
    loadRandomProfile?: (()=>void) | null;
    onCandidateList?: boolean | null;
};

const CandidateCard = ({
    currentCandidate,
    removeFromStorage,
    // The buttons do not appear to be part of the card CHANGED
    addToPotentialCandidates,
    loadRandomProfile,
    onCandidateList,
}: CandidateCardProps) => {
    return (
        <>
            {currentCandidate?.Name}
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentCandidate.ProfilePic}`} alt={`${currentCandidate.Name}`}/>
                    </figure>
                    <article className='details'>
                        <h2><strong>{currentCandidate.Name}</strong></h2>
                        <p>Location: {currentCandidate.Location}</p>
                        <p>Email: {currentCandidate.Email}</p>
                        <p>Company: {currentCandidate.Company}</p>
                        <p>Bio: {currentCandidate.Bio}</p>
                        {onCandidateList ? (
                            <aside className='icons'>
                                <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => 
                                    removeFromStorage?.(
                                        event,
                                        onCandidateList,
                                        currentCandidate.Name
                                    )
                                }
                                />
                            </aside>
                        ) : (
                            <section>
                                <button onClick={()=>loadRandomProfile?.()}></button>
                                <button onClick={()=>{addToPotentialCandidates?.(); addToPotentialCandidates?.()}}></button>
                            </section>
                        )}
                    </article>
                </section>
        </>
    );
};

export default CandidateCard;