import React from 'react';
import './matching_page.css';
// import 'img.className="icon-refresh' ;

export const matching_page = (user_name) => {
    return(
        <div>
            <h1 class="user">
                <div class="user_avatar"></div>
                <div class="user_name">{user_name}</div>
            </h1>

            <div class="matching_details">
                <ul class="matching_action">
                    <li class="action_option"><a href="#">Matches</a></li>
                    <li class="action_option"><a href="#">Messages</a></li>
                </ul>

                <div class="matches_introduction">
                    <div class="bar"></div>
                    <h1 class="title">Start Matching
                        <div class="description">Matches will appear here once you start to Like people. You can message them directly from here when you’re ready to spark up the conversation</div>
                    </h1>
                </div>
            </div>

            <div class="match_user">
                <div class="recommend_user">
                    <div class="circle"></div>
                    <h2 class="ru">
                        {user_name}
                        <div class="ru_actions">
                            <a href="#"><span class="material-symbols-outlined">Refresh</span></a>
                            <a href="#"><span class="material-symbols-outlined">Close</span></a>
                            <a href="#"><span class="material-symbols-outlined">Favorite</span></a>
                            <a href="#"><span class="material-symbols-outlined">Person</span></a>                
                         </div>
                    </h2>
                </div>
            </div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          
        </div>
    );
}

const ru_action = (option) => {
    return(
        <div class="circle1"></div>
    );
}