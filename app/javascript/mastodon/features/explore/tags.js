import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { ImmutableHashtag as Hashtag } from '../../components/hashtag';
import LoadingIndicator from '../../components/loading_indicator';
import { connect } from 'react-redux';
import { fetchTrendingHashtags } from '../../actions/trends';

const mapStateToProps = state => ({
  hashtags: state.getIn(['trends', 'tags', 'items']),
  isLoadingHashtags: state.getIn(['trends', 'tags', 'isLoading']),
});

class Tags extends React.PureComponent {

  static propTypes = {
    hashtags: ImmutablePropTypes.list,
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(fetchTrendingHashtags());
  }

  render () {
    const { isLoading, hashtags } = this.props;

    return (
      <div className='explore__links'>
        {isLoading ? (<LoadingIndicator />) : hashtags.map(hashtag => (
          <Hashtag key={hashtag.get('name')} hashtag={hashtag} />
        ))}
      </div>
    );
  }

}
export default connect(mapStateToProps)(Tags);
