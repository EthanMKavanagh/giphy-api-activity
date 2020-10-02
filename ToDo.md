-- TO DO --

CLIENT SIDE

    -- ETHAN 
    
    Index.js
        [X] Imports
            [X] Saga 
            [X] Axios
            [X] npm installs 
                [X] redux-saga
                [X] redux-logger
                [X] redux
                [X] dotenv
                [X] react-router-dom
                [X] react-redux
        [X] Create env file
    
    ROUTES
    
        ---JUSTUS AND MIKE

        [x] HEADER COMPONENT (IMPORT To APP) 

        [] SEARCH VIEW COMPONENT (IMPORT to APP)

            []Form FORM COMPONENT (IMPORT to SEARCH VIEW)
                []Input Field (allow users to submit a search request. Type='text')
                []On Submit (send query to SERVER | GET route to API --- giphy-API-Activity)
                        [] DISPATCH - from Component to Saga (index.js), fetchSearchSaga (which is a GET request from SERVER (which is pulling from giphy API)) -- THIS IS WHAT WILL PULL IN DATA FROM SERVER TO OUR REDUCER (index.js)

            []Display Results on DOM LIST COMPONENT (IMPORT to SEARCH VIEW)
                    [x] .Map (grab that information using mapStateToProps)

                        []IMAGE COMPONENT (IMPORT to LIST COMPONENT)
                            [] Image
                            [] Favorite Button
                                []On Click
                                    [] POST to db
                                        [] API url (from Giphy)
                                        

        --- TYLER & ETHAN

        [] FAVORITES VIEW COMPONENT (IMPORT TO APP)
                ** redux-garden
        
             [] GET ROUTE to DB
                [] DISPATCH - from Component to Saga (index.js),  function* fetchFavoritesSaga() (which is a GET request to SERVER (router to db) ** NEED TO WRITE QUERY for GET route

             []Display Results on DOM - LIST COMPONTENT (IMPORT to FAVORITES VIEW)
                    [] .Map (grab that information using mapStateToProps)

                        []IMAGE COMPONENT (IMPORT to LIST COMPONENT)
                            [] Image
                            [] Category Dropdown Menu (displays categories in db)
                                    ** react-gallery
                            [] Display Current Category
                            

                                []OnChange / onClick
                                    [] DISPATCH - from Component to Saga (index.js),  function* updateCategorySaga() (which is a PUT request to SERVER (router to db) ** NEED TO WRITE QUERY for PUT route
                                    [] PUT to db
                                        [] update category of image.id (/:favId)








