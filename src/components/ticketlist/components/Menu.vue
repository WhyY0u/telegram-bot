<script>
import search from "../../../assets/search.png"
import sorting from "../../../assets/sorting.png"

export default {
  data() {
    return {
      sorting,
      search,
      searching: false,
      issorting: false,
      sorting_type: "",
      input_search: '',
    };
  },
  methods: {
    input_searchM(event) {
    this.input_search = event.target.value;
  },
  SearchClick() {
    this.searching = true;
    this.issorting = false;
  },
  SearchBlur() {
   this.$emit('set-search', this.input_search);
   this.searching = false
  },
  SortingClick() {
    this.issorting = !this.issorting;
  },
  OnClickSorting(name) {
    this.sorting_type = name;
    this.$emit('set-sorting', name);
    console.log(name)
    
  }
},
};
</script>

<template>
    <div class="container_react" :class="{'padding_bottom': issorting}">
        <input @click="SearchClick" @blur="SearchBlur" :class="{'full_search': searching,
                                                                'small_search': issorting,
        }" class="react_1" @input="input_searchM"/>
        <div class="container_search">
            <img :src="search" 
            :class="{'animation_hide_opacity_img': searching || input_search.length > 0,
                     'animation_back_opacity_img':  (!searching  && input_search.length <= 0)
            }" alt="search" class="search"/>
            <p class="search_text" :class="{'animation_hide_opacity': searching || input_search.length > 0,
                                            'animation_back_opacity': (!searching  && input_search.length <= 0)
            }">Search...</p>
        </div>

        <div class="react_2" :class="{'hide_sorting': searching,
                                      'full_sortring': issorting
        }" @click="SortingClick" >
            <img :src="sorting" :class="{'animation_hide_opacity_img': searching}" alt="sorting" class="sorting"/>
            <p class="sorting_text" :class="{'animation_hide_opacity': searching}">Sorting</p>
            <div class="sorting_status">
                <p class="status_text" :class="{'sorting_select': sorting_type == 'Status'}"  @click="OnClickSorting('Status')">Status</p>
                <p class="status_text" :class="{'sorting_select': sorting_type == 'Type'}" @click="OnClickSorting('Type')">Type</p>
            </div>
        </div>
        
</div>

</template>

<style>
@keyframes inint_react_2 {
    0% {
        transform: translateX(300px);
    }
    100% {
        transform: translateX(0px);

    }
}
@keyframes inint_react_1 {
    0% {
        transform: translateX(-300px);
    }
    100% {
        transform: translateX(0px);

    }
}

@keyframes backopacity {
    0% {
        opacity: 0;
        transform: translate(0px);
    }

    100% {
        opacity: 1.0;
        transform: translate(0px);
    }
}

@keyframes hideopacity {
    0% {
        opacity: 0.25;
        transform: translate(0px);
    }

    100% {
        opacity: 0;
        transform: translate(10px);
    }
}

@keyframes hideopacity_img {
     0% {
        opacity: 1;
        transform: translate(-57px);
     }
     100% {
        transform: translate(-42px);
        opacity: 0;

     }
}

@keyframes backopacity_img {
     0% {
        opacity: 0;
        transform: translate(-42px);
     }
     100% {
        transform: translate(-57px);
        opacity: 1;

     }
}
 .container_react {
    position: relative;
    width: 100%;
    height: 42px;
    top: 0px;
    transition: height 0.5s ease;

 .react_1 {
    position: absolute;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(166, 129, 86, 0.4);
    border-left: 1px solid rgba(166, 129, 86, 0.4);
    border-top: 1px solid rgba(166, 129, 86, 0.4);
    backdrop-filter: blur(8px);
    background: rgba(17, 17, 17, 0.2);
    border-right: none;
    border-radius: 0px 0px 0px 20px;
    backdrop-filter: blur(12px);
    
    width: 45%;
    left: 5%;
    height: 42px;
    top: 0px;
    cursor: pointer;
    transition: width 0.5s, border-radius 0.5s ease;
    outline:none ;
    color: rgb(255, 255, 255, 0.8);
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    padding-left: 10px;
    line-height: 17px;
    letter-spacing: 0px;
    
    
 }
 .container_search {
    position: absolute;
    width: 45%;
    left: 5%;
    height: 42px;
    top: 0px;
    pointer-events: none;

    .search_text {
        position: relative;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: center;
        opacity: 1.0;
        top: 13px;
        padding-left: 15px;

    }

    .search {
        position: absolute;
        top: 10px;
        left: 55%;
        user-select: none;
        transform: translateX(-57px);
    }

 }


 .full_search {
        width: 90%;
        border-radius: 0px 0px 20px 20px;
        border-right: 1px solid rgba(166, 129, 86, 0.5);
    }

 .react_2 {
    position: absolute;
    box-sizing: border-box;
    border-radius: 0px 20px 0px 0px;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(166, 129, 86, 0.4);
    background: rgba(17, 17, 17, 0.2);
    width: 45%;
    right: 5%;
    height: 42px;
    top: 0px;
    cursor: pointer;
    overflow: hidden;
    transition: width 0.5s, height 0.5s, border-radius 0.5s ease;

    .status_text {
            position: relative;
            font-family: Inter;
            color: rgb(201, 201, 201);
            opacity: 0.7;
            font-weight: 300;
            font-size: 14px;
            padding-top: 7px;
            transition: font-size 0.25s ease
        }

        .sorting_select {
            color: white;
            font-size: 16px;
            opacity: 1.0;
            color: rgba(166, 129, 86, 1.0)
        }

    .sorting_status {
        position: relative;
        width: 100%;
        height: 100%;
        top: 23px;
        text-align: center;
    }
    


    .sorting {
        position: absolute;
        top: 10px;
        left: 55%;
        transform: translateX(-50px);
        pointer-events: none;
    }

    .sorting_text {
        position: relative;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: center;
        opacity: 1.0;
        top: 12px;
        padding-left: 15px;
        user-select: none;
        pointer-events: none;
    }
 }
 .hide_sorting {
        width: 0px;
        border: 0px solid rgba(166, 129, 86, 0.2);
        pointer-events: none;
        cursor: none;
  }
  .animation_hide_opacity {
        animation: hideopacity 0.35s ease forwards;
        pointer-events: none;
        cursor: none;
    }  
    .animation_hide_opacity_img {
        animation: hideopacity_img 0.35s ease forwards;
        pointer-events: none;
        cursor: none;
        
    }
    .animation_back_opacity_img {
        animation: backopacity_img 0.35s ease forwards;
    }
    .animation_back_opacity {
        animation: backopacity 0.35s ease forwards;
    }
    .full_sortring {
        height: 105px;
        border-radius: 0px 20px 20px 20px;
    }
    .small_search {
         border-radius: 0px 0px 0px 20px;
    }
  
}
.padding_bottom {
    height: 95px;

   }
</style>