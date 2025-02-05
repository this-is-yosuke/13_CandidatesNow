import React from 'react'
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    currentCandidate: Candidate;
    removeFromStorage?: | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnCandidateList: boolean | null | undefined,
        login: string | null
    ) => void) | null;
    // The buttons don't appear to be part of the card CHANGED
    addToPotentialCandidates?: (()=>void) | null;
    // loadRandomProfile?: (()=>void) | null;
    loadRandomID?: (()=>void) | null;
    onCandidateList?: boolean | null;
};

const CandidateCard = ({
    currentCandidate,
    removeFromStorage,
    // The buttons do not appear to be part of the card CHANGED
    addToPotentialCandidates,
    // loadRandomProfile,
    loadRandomID,
    onCandidateList,
}: CandidateCardProps) => {
    return (
        <>
            <section className='candidateCard'>
                <figure className='container'>
                    <img className='profile' src={currentCandidate.avatar_url ?? ""} alt='profile-pic'/>
                </figure>
                <article className='details cardInnards'>
                    <p>Username: {currentCandidate.login} <i>({currentCandidate.name})</i> </p>
                    <p>Location: {currentCandidate.location}</p>
                    <p>Email: {currentCandidate.email}</p>
                    <p>Company: {currentCandidate.company}</p>
                    <p>Bio: {currentCandidate.bio}</p>
                    {onCandidateList ? (
                        <aside className='icons'>
                            <button className='skip' onClick={(event: React.MouseEvent<HTMLButtonElement>) => 
                                removeFromStorage?.(
                                    event,
                                    onCandidateList,
                                    currentCandidate.login
                                )
                            }
                            >-</button>
                        </aside>
                        ) : (
                            <section>
                                {/* <button onClick={()=>loadRandomProfile?.()}></button> */}
                                <button className='skip' onClick={()=>loadRandomID?.()}>-</button>
                                <button className='add' onClick={()=>{addToPotentialCandidates?.(); loadRandomID?.()}}>+</button>
                            </section>
                        )}
                    </article>
                </section>
        </>
    );
};

export default CandidateCard;