import React, {useContext, useEffect, useState} from "react";
import './Map.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import {SearchContext} from "../contexts/search.context";
import {SimpleAdEntity} from 'types';
import {SingleAd} from "./SingleAd";


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        console.log('make requyest to search for', search);
    }, [search]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`)
            const data = await res.json();

            setAds(data);
        })();
    }, [search])

    return (
        <div className='map'>
            <MapContainer center={[52.4636221, 16.9202548]} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }

                {/*<Marker position={[52.4625027, 16.9234834]}>*/}
                {/*    <Popup>*/}
                {/*        <h2>My home</h2>*/}
                {/*        <p>misiek tutaj mieszka i i jego ekipa Batory shore</p>*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
            </MapContainer>
        </div>
    );
};