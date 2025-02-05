import React from 'react'
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    currentCandidate: Candidate;
    removeFromStorage?: | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnCandidateList: boolean | null | undefined,
        login: string | null
    ) => void) | null;
    addToPotentialCandidates?: (()=>void) | null;
    loadRandomID?: (()=>void) | null;
    onCandidateList?: boolean | null;
};

const CandidateCard = ({
    currentCandidate,
    removeFromStorage,
    addToPotentialCandidates,
    loadRandomID,
    onCandidateList,
}: CandidateCardProps) => {
    return (
        <>
            <section className='candidateCard'>
                {!currentCandidate.login ? (
                    <aside className='icons'>
                        <p className='error-text'>Unable to find a candidate. Please try again.</p>
                        <button className='skip' onClick={()=>loadRandomID?.()}
                        >-</button>
                        </aside>
                ) : (
                    <>
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
                                <button className='skip' onClick={()=>loadRandomID?.()}>-</button>
                                <button className='add' onClick={()=>{addToPotentialCandidates?.(); loadRandomID?.()}}>+</button>
                            </section>
                        )}
                    </article>
                    </>
                )}
                </section>
        </>
    );
};

export default CandidateCard;