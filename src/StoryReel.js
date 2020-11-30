import React,{Component} from 'react'
import './StoryReel.css'
import Story from './Story'

class StoryReel  extends Component {
  render(){
    return (
        <div className="storyreel">
           <Story imges="https://static.toiimg.com/photo/msid-76976026/76976026.jpg?108773"
                  profilesrc="https://i.ytimg.com/vi/m0ZDjsNTlFI/maxresdefault.jpg"
                    title="Vadivelu" />
    
            <Story imges="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                     profilesrc="https://static.toiimg.com/thumb/msid-74157132,width-1200,height-900,resizemode-4/.jpg"
                      title="Dhoni" />

            <Story imges="https://www.businessupturn.com/wp-content/uploads/2020/09/dhanush.jpg"
                      profilesrc="https://www.tollywood.net/wp-content/uploads/2020/05/Story-behind-Dhanush-real-life-love-story.jpg"
                     title="Dhanush" />

            <Story imges="https://assets.thehansindia.com/h-upload/feeds/2019/07/04/192635-samantha.jpg"
                          profilesrc="https://i.pinimg.com/236x/67/92/14/67921485d9ec0159949c89bdf426449b.jpg"
                          title="Samantha" />
           <Story imges="https://static.toiimg.com/photo/msid-69320562/69320562.jpg?363138" 
                  profileSrc="https://static.toiimg.com/photo/msid-69320562/69320562.jpg?363138" 
                    title="vijay"/>

            
        </div>
    )
  }
}

export default StoryReel
