
import { IconSearch } from '@tabler/icons-react';
import './search.css';

function Search() {
  return (
    <section className='search-container'>
      <div className='search'>
        <div className='search-left'>
          <p>mes</p>
        </div>
        <div className='search-right'>
          <form className='search-form'>
            <div className='box-input'>
              <input
                type='search'
                placeholder='Procurar...'
              />
              <button className='btn-search'>
                <IconSearch
                  size={20}
                  className='icon-search'
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Search }

