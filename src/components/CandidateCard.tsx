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
            {/* {currentCandidate?.Name} */}
            {currentCandidate?.Login}
                <section className='candidateCard'>
                    <figure>
                        {/* <img src={`${currentCandidate.ProfilePic}`} alt={`${currentCandidate.Name}`}/> */}
                        <img src={`${currentCandidate.ProfilePic}`} alt={`${currentCandidate.Login}`}/>
                    </figure>
                    <article className='details'>
                        {/* <h2><strong>{currentCandidate.Name}</strong></h2> */}
                        <h2><strong>{currentCandidate.Login}</strong></h2>
                        <p>Location: {currentCandidate.Location}</p>
                        <p>Email: {currentCandidate.Email}</p>
                        <p>Company: {currentCandidate.Company}</p>
                        <p>Bio: {currentCandidate.Bio}</p>
                        <p>login: {currentCandidate.login}</p>
                        <p>id: {currentCandidate.id}</p>
                        <p>node_id: {currentCandidate.node_id}</p>
                        <p>avatar_url: {currentCandidate.avatar_url}</p>
                        <img src={currentCandidate.avatar_url} alt='profile-pic'/>
                        <p>gravatar_url: {currentCandidate.gravatar_id}</p>
                        <p>location: {currentCandidate.location}</p>
                        <p>email: {currentCandidate.email}</p>
                        <p>company: {currentCandidate.company}</p>
                        <p>Bio: {currentCandidate.bio}</p>
                        {onCandidateList ? (
                            <aside className='icons'>
                                <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => 
                                    removeFromStorage?.(
                                        event,
                                        onCandidateList,
                                        // currentCandidate.Name
                                        currentCandidate.Login
                                    )
                                }
                                />
                            </aside>
                        ) : (
                            <section>
                                {/* <button onClick={()=>loadRandomProfile?.()}></button> */}
                                <button onClick={()=>loadRandomID?.()}></button>
                                <button onClick={()=>{addToPotentialCandidates?.(); addToPotentialCandidates?.()}}></button>
                            </section>
                        )}
                    </article>
                </section>
        </>
    );
};

export default CandidateCard;