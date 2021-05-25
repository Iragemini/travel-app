import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';
import TranslatableText from '../../components/TranslatableText';
import classes from './Country.module.scss';
import Widgets from '../../components/Widgets/Widgets';
import Video from '../../components/Video/Video';
import Map from '../../components/Map/Map';
import Gallery from '../../components/Gallery';

const Country = ({countries, countryName, setShowSearch}) => {
  const ref = useRef(null);

  useEffect(() => {
    setShowSearch(false);
    window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});
  }, []);

  const country = countries.find((el) => el.name.en.toLowerCase() === countryName);

  return (
    <main className={`${classes['container-country']} main`}>
      <div className="container-center">
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className={classes.head} style={{backgroundImage: `url(${country.img.original})`}}>
              <div className={classes['block-text']}>
                <h1 className={classes.title}>
                  <TranslatableText
                    dictionary={{
                      russian: country.name.ru,
                      belarusian: country.name.be,
                      english: country.name.en
                    }}
                  />
                </h1>
                <span className={classes.capital}>
                  <TranslatableText
                    dictionary={{
                      russian: `столица: ${country.capital.ru}`,
                      belarusian: `сталіца: ${country.capital.be}`,
                      english: `capital: ${country.capital.en}`
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={classes['block-description']}>
              <p className={classes.description}>
                <TranslatableText
                  dictionary={{
                    russian: country.description.ru,
                    belarusian: country.description.be,
                    english: country.description.en
                  }}
                />
              </p>
            </div>
            <div className={classes.components} ref={ref}>
              <div className={classes.gallery}>
                <Gallery gallery={country.gallery} />
              </div>
              <div className={classes['video-and-map']}>
                <Video video={country.video} />
                <Map country={country} />
              </div>
            </div>
          </div>
          <div className={classes['block-widget']}>
            <div className={classes.widget}>
              <Widgets country={country} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({countries}) => {
  return {countries};
};

const mapDispatchToProps = {
  setShowSearch
};

Country.propTypes = {
  countries: PropTypes.array.isRequired,
  countryName: PropTypes.string.isRequired,
  setShowSearch: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);
