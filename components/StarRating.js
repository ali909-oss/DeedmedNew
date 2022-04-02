import React from 'react';
import StarRating from 'react-native-star-rating';
import { widthPercentageToDP } from 'react-native-responsive-screen';


class CustomStarExample extends StarRating {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
      starStyle={{marginLeft:widthPercentageToDP('2%')}}
        disabled={false}
        emptyStar={'star-o'}
        fullStar={'star'}
        halfStar={'star-o'}
        iconSet={'AntDesign','FontAwesome'}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'#ffe234'}
      />
    );
  }
}

export default CustomStarExample