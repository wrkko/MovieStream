import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Check, ChevronDown, Info, Play, Plus, Search, X } from 'lucide-react';
import { artwork, featured, shelves, titles } from './data.js';

function readSaved() {
  try { return JSON.parse(localStorage.getItem('moviestream-list') || '[]'); }
  catch { return []; }
}

function Header({ query, setQuery, onMyList }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const input = useRef(null);
  useEffect(() => { if (searchOpen) input.current?.focus(); }, [searchOpen]);
  const closeSearch = () => { setSearchOpen(false); setQuery(''); };
  return <header className="topbar shell">
    <a className="brand" href="#home">MOVIE<span>STREAM</span></a>
    <nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#trending">Series</a><a href="#popular">Films</a><a href="#genres">Categories</a></nav>
    <div className="nav-right">
      <form className={`search-box ${searchOpen ? 'open' : ''}`} onSubmit={(event) => event.preventDefault()}>
        {searchOpen && <input ref={input} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Titles, people, genres" aria-label="Search titles" />}
        <button className="icon-btn" type="button" aria-label={searchOpen ? 'Close search' : 'Open search'} onClick={() => searchOpen ? closeSearch() : setSearchOpen(true)}>{searchOpen ? <X size={19} /> : <Search size={19} />}</button>
      </form>
      <button className="icon-btn list-nav" onClick={onMyList} aria-label="Show my list"><Bookmark size={18} /></button>
      <button className="avatar" aria-label="Profile menu">M<ChevronDown size={12} /></button>
    </div>
  </header>;
}

function TitleCard({ title, onSelect }) {
  return <button className="card" type="button" onClick={() => onSelect(title)} aria-label={`More about ${title.name}`}>
    <img loading="lazy" src={artwork(title, 440)} alt={`${title.name} artwork`} />
    <span className="card-badge">&#9733; {title.rating}</span>
    <span className="card-info"><strong>{title.name}</strong><span>{title.year} <i>·</i> {title.genre}</span></span>
  </button>;
}

function Shelf({ title, items, onSelect, id }) {
  const row = useRef(null);
  const scroll = (direction) => row.current?.scrollBy({ left: direction * Math.max(280, row.current.clientWidth * 0.8), behavior: 'smooth' });
  return <section className="shelf" id={id}>
    <div className="shelf-head"><h2>{title}</h2><a href="#genres">Explore all <span>&rarr;</span></a></div>
    <div className="row-wrap"><button className="row-arrow left" onClick={() => scroll(-1)} aria-label={`Scroll ${title} left`}><ArrowLeft size={20} /></button><div className="row" ref={row}>{items.map((item) => <TitleCard key={item.name} title={item} onSelect={onSelect} />)}</div><button className="row-arrow right" onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}><ArrowRight size={20} /></button></div>
  </section>;
}

function DetailsModal({ title, onClose, saved, onToggleSave }) {
  useEffect(() => {
    const handleKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <article className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close" onClick={onClose} aria-label="Close details"><X size={20} /></button>
      <div className="modal-image" style={{ backgroundImage: `url('${artwork(title, 1100)}')` }} />
      <div className="modal-body"><h2 id="modal-title">{title.name}</h2><div className="hero-meta"><span className="match">? {title.rating}</span><span>{title.year}</span><span className="tag">{title.genre}</span><span className="tag">4K</span></div><p>{title.description}</p>
        <div className="actions"><button className="btn btn-primary" onClick={(event) => { const button = event.currentTarget; button.disabled = true; button.innerHTML = 'Ready to play'; setTimeout(() => { button.disabled = false; button.innerHTML = 'Play now'; }, 1200); }}><Play size={15} fill="currentColor" /> Play now</button><button className="btn btn-secondary" onClick={() => onToggleSave(title)}>{saved ? <Check size={16} /> : <Plus size={16} />}{saved ? 'In my list' : 'My list'}</button></div>
      </div>
    </article>
  </div>;
}

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState(readSaved);
  const search = query.trim().toLowerCase();
  const filtered = useMemo(() => search ? titles.filter((title) => `${title.name} ${title.genre} ${title.year}`.toLowerCase().includes(search)) : [], [search]);
  const savedTitles = titles.filter((title) => saved.includes(title.name));
  const toggleSave = (title) => setSaved((current) => {
    const updated = current.includes(title.name) ? current.filter((name) => name !== title.name) : [...current, title.name];
    localStorage.setItem('moviestream-list', JSON.stringify(updated));
    return updated;
  });
  const showMyList = () => document.getElementById('my-list')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return <>
    <Header query={query} setQuery={setQuery} onMyList={showMyList} />
    <section className="hero" id="home" style={{ backgroundImage: `url('${artwork(featured, 1800)}')` }}>
      <div className="hero-content shell"><div className="eyebrow"><span>&#10022;</span> MovieStream original</div><h1>THE NIGHT<br />AGENT</h1><div className="hero-meta"><span className="match">98% Match</span><span>{featured.year}</span><span className="tag">TV-MA</span><span>2 Seasons</span><span className="tag">4K</span></div><p>{featured.description}</p><div className="actions"><button className="btn btn-primary" onClick={() => setSelected(featured)}><Play size={15} fill="currentColor" /> Play now</button><button className="btn btn-secondary" onClick={() => setSelected(featured)}><Info size={16} /> More info</button></div></div>
    </section>
    <main className="shell browse">
      {search ? <section className="search-results"><div className="section-label">Your search</div><h2>{filtered.length} title{filtered.length === 1 ? '' : 's'} for “{query.trim()}”</h2><div className="results-grid">{filtered.length ? filtered.map((item) => <TitleCard key={item.name} title={item} onSelect={setSelected} />) : <p className="empty">No titles found. Try a different search.</p>}</div></section> : <>
        {shelves.map((shelf, index) => <Shelf key={shelf.title} title={shelf.title} items={shelf.ids.map((name) => titles.find((item) => item.name === name)).filter(Boolean)} onSelect={setSelected} id={index === 0 ? 'trending' : index === 1 ? 'popular' : 'genres'} />)}
        {savedTitles.length > 0 && <Shelf title="My list" items={savedTitles} onSelect={setSelected} id="my-list" />}
        {savedTitles.length === 0 && <div id="my-list" className="list-empty"><Bookmark size={17} /><span>Your list is ready for a good story.</span></div>}
      </>}
      <footer className="footer"><span>© 2025 MovieStream. Stories worth staying in for.</span><a href="#home">Back to top &uarr;</a></footer>
    </main>
    {selected && <DetailsModal title={selected} onClose={() => setSelected(null)} saved={saved.includes(selected.name)} onToggleSave={toggleSave} />}
  </>;
}

export default App;


