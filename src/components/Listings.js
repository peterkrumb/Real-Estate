import React, {Component} from 'react';


class Listings extends Component {
    constructor () {
        super()
        this.state = {
            name: 'Joe'
        }
    }
    render() {
  return (<section className='listings'>
      <section className='search-area'>
        <input type='text' name='search'></input>
      </section>

      <section className='sortBy'>

      </section>

        <section className='listings-results'>

        </section>

        <section className='pagination'>

        </section>

  </section>
  );
}
}
export default Listings;
