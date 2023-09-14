import React, {useEffect, useState} from 'react';
import { AdEntity } from 'types';

interface Props {
    id: string,
}

export const SingleAd = (props: Props)=>{
    const [ad,setAd] = useState<AdEntity | null>(null)

    useEffect(()=>{
        console.log('pokaz reklame', props.id);
        (async ()=>{
            const res = await fetch(`http://localhost:3001/ad/${props.id}`)
            const data = await res.json();

            setAd(data);
        })();
    },[]);

    if (ad === null) {
        return <p>Wczytywanie danych</p>
    }

    return <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {ad.price && <p>{ad.price} zł</p>}
        <hr/>
        <a href={ad.url} target="_blank" rel="noreferrer">Otworz ogłoszenie</a>


    </>

}
