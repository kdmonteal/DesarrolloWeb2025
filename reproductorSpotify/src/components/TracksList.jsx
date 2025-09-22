export default function TracksList({tracks, currentIndex, onSelect}) {
    return (
        <ul>
            {tracks.map ((t,i) => (
                <li key={t.id} 
                    className={`item ${i===currentIndex ? "active":""}`} 
                    onClick={()=>onSelect(i)}    
                >
                
                <div className="meta">
                    <span>{t.title}</span>
                    <span>{t.artist}</span>
                </div>

                <span className="small">Reproducir</span>
                </li>
            ))}
        </ul>
    );
}