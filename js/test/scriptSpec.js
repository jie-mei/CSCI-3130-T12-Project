describe('Website', function() {

    describe('page switch by pressing button on', function() {

        describe('"Welcome" page', function() {

            // Create a new division for fixture before test.
            beforeEach(function() {
                $('<div id="fixture"></div>').appendTo('body');
            });

            // Remove fixture after test.
            afterEach(function() {
                $('#fixture').remove();
            });

            // Try to switch to login page by pressing sign in buttom.
            it('should link to "Login" page by pressing "sign in" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#index #sign_in_Btn').click();
                    expect(window.location.hash).toBe('#login');
                });
            });

            // Try to switch to register page by pressing sign up buttom.
            it('should link to "Register" page by pressing "sign up" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#index #sign_up_Btn').click();
                    expect(window.location.hash).toBe('#register');
                });
            });
        });

        describe('"Main" page', function() {

            // Create a new division for fixture before test.
            beforeEach(function() {
                $('<div id="fixture"></div>').appendTo('body');
            });

            // Remove fixture after test.
            afterEach(function() {
                $('#fixture').remove();
            });

            // Try to stay on main page by pressing main buttom.
            it('should stay on the current page by pressing "Home" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#main #main_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#main');
                });
            });

            // Try to switch to add page by pressing add buttom.
            it('should link to "Add" page by pressing "Add" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#main #add_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#add');
                });
            });

            // Try to switch to history page by pressing history buttom.
            it('should link to "History" page by pressing "History" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#main #history_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#history');
                });
            });

            // Try to switch to advice page by pressing advice buttom.
            it('should link to "Advice" page by pressing "Advice" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#main #advice_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#advice');
                });
            });

            // Try to switch to welcome page by pressing sign out buttom.
            it('should link to "Welcome" page by pressing "sign out" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#main #sign_out_Btn').click();
                    expect(window.location.hash).toBe('#index');
                });
            });
        });

        describe('"Add" page', function() {

            // Create a new division for fixture before test.
            beforeEach(function() {
                $('<div id="fixture"></div>').appendTo('body');
            });

            // Remove fixture after test.
            afterEach(function() {
                $('#fixture').remove();
            });

            // Try to switch to main page by pressing add buttom.
            it('should link to "Main" page by pressing "Home" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#add #main_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#main');
                });
            });

            // Try to stay on the add page by pressing main buttom.
            it('should stay on the current page by pressing "Add" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#add #add_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#add');
                });
            });

            // Try to switch to history page by pressing history buttom.
            it('should link to "History" page by pressing "History" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#add #history_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#history');
                });
            });

            // Try to switch to advice page by pressing advice buttom.
            it('should link to "Advice" page by pressing "Advice" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#add #advice_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#advice');
                });
            });

            // Try to switch to welcome page by pressing sign out buttom.
            it('should link to "Welcome" page by pressing "sign out" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#add #sign_out_Btn').click();
                    expect(window.location.hash).toBe('#index');
                });
            });
        });

        describe('"History" page', function() {

            // Create a new division for fixture before test.
            beforeEach(function() {
                $('<div id="fixture"></div>').appendTo('body');
            });

            // Remove fixture after test.
            afterEach(function() {
                $('#fixture').remove();
            });

            // Try to switch to main page by pressing add buttom.
            it('should link to "Main" page by pressing "Home" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#history #main_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#main');
                });
            });

            // Try to switch to add page by pressing add buttom.
            it('should link to "Add" page by pressing "Add" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#history #add_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#add');
                });
            });

            // Try to stay on history page by pressing main buttom.
            it('should stay on the current page by pressing "History" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#history #history_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#history');
                });
            });

            // Try to switch to advice page by pressing advice buttom.
            it('should link to "Advice" page by pressing "Advice" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#history #advice_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#advice');
                });
            });

            // Try to switch to welcome page by pressing sign out buttom.
            it('should link to "Welcome" page by pressing "sign out" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#history #sign_out_Btn').click();
                    expect(window.location.hash).toBe('#index');
                });
            });
        });

        describe('"Advice" page', function() {

            // Create a new division for fixture before test.
            beforeEach(function() {
                $('<div id="fixture"></div>').appendTo('body');
            });

            // Remove fixture after test.
            afterEach(function() {
                $('#fixture').remove();
            });

            // Try to switch to main page by pressing add buttom.
            it('should link to "Main" page by pressing "Home" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#advice #main_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#main');
                });
            });

            // Try to switch to add page by pressing add buttom.
            it('should link to "Add" page by pressing "Add" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#advice #add_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#add');
                });
            });

            // Try to switch to history page by pressing history buttom.
            it('should link to "History" page by pressing "History" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#advice #history_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#history');
                });
            });

            // Try to stay on advice page by pressing advice buttom.
            it('should stay on the current page by pressing "Advice" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#advice #advice_tabbar_Btn').click();
                    expect(window.location.hash).toBe('#advice');
                });
            });

            // Try to switch to welcome page by pressing sign out buttom.
            it('should link to "Welcome" page by pressing "sign out" buttom', function() {
                $('#fixture').load('index.php #content', function() {
                    $('#advice #sign_out_Btn').click();
                    expect(window.location.hash).toBe('#index');
                });
            });
        });
    });

    // Test the login function.
    describe('login function', function() {

        var username = "TestUser";
        var password = "TestPwd";

        // Create a valid testing account before test.
        // And create a new division for fixture before test.
        beforeEach(function() {
            $('<div id="fixture"></div>').appendTo('body');
            $.ajax({
                type: 'POST',
                url: 'mySQL.php',
                data: {
                    func: 'register',
                    username: username,
                    password: password 
                },
                dataType: 'text',
                error: function(responce) {
                    this.fail();
                }
            });
        });

        // Remove the testing account after test.
        // And remove fixture after test.
        afterEach(function() {
            $('#fixture').remove();
            $.ajax({
                type: 'POST',
                url: 'mySQL.php',
                data: {
                    func: 'remove',
                    username: username,
                },
                dataType: 'text',
                error: function(responce) {
                    this.fail();
                }
            });
        });

        // Try to login with testing username and password.
        // It expects website will change to the main page.
        it('should accept with correct username and password', function() {
            $('#fixture').load('index.php #content', function() {
                $('#login #usrname_TI').val(username);
                $('#login #pwd_TI').val(password);
                $('#login #login_Btn').click();
                expect(window.location.hash).toBe('#main');
            });
        });

        // Try to login with testing username and incorrect password.
        // It expects website will not change to the main page.
        it('should reject with incorrect username', function() {
            $('#fixture').load('index.php #content', function() {
                $('#login #usrname_TI').val(username);
                $('#login #pwd_TI').val('123');
                $('#login #login_Btn').click();
                expect(window.location.hash).not.toBe('#main');
            });
        });

        // Try to login with incorrect username and testing password.
        // It expects website will not change to the main page.
        it('should reject with incorrect password', function() {
            $('#fixture').load('index.php #content', function() {
                $('#login #usrname_TI').val('Mei');
                $('#login #pwd_TI').val(password);
                $('#login #login_Btn').click();
                expect(window.location.hash).not.toBe('#main');
            });
        });
    });

    // Test the register function.
    describe('register function', function() {

        var username = "TestUser";
        var password = "TestPwd";

        // Remove the testing account before test to ensure it can be
        // successfully registered.
        beforeEach(function() {
            $('<div id="fixture"></div>').appendTo('body');
            $.ajax({
                type: 'POST',
                url: 'mySQL.php',
                data: {
                    func: 'remove',
                    username: username,
                },
                dataType: 'text',
                error: function(responce) {
                    this.fail();
                }
            });
        });

        // Clean up the login table after test.
        afterEach(function() {
            $('#fixture').remove();
            $.ajax({
                type: 'POST',
                url: 'mySQL.php',
                data: {
                    func: 'remove',
                    username: username,
                },
                dataType: 'text',
                error: function(responce) {
                    this.fail();
                }
            });
        });

        // Try to register with testing username and password.
        // It expects website will change to the main page.
        it('should accept with unused username', function() {
            $('#fixture').load('index.php #content', function() {
                $('#register #usrname_TI').val(username);
                $('#register #pwd1_TI').val(password);
                $('#register #pwd2_TI').val(password);
                $('#register #reg_Btn').click();
                expect(window.location.hash).toBe('#main');
            });
        });

        // Try to register with testing username twice.
        // It expects website will reject the second registration and not
        // change to the main page.
        it('should reject with exist username', function() {
            $('#fixture').load('index.php #content', function() {
                for (var i = 0; i > 1; i++) {
                    $('#register #usrname_TI').val(username);
                    $('#register #pwd1_TI').val(password);
                    $('#register #pwd2_TI').val(password);
                    $('#register #reg_Btn').click();
                }
                expect(window.location.hash).not.toBe('#main');
            });
        });
    });
});
