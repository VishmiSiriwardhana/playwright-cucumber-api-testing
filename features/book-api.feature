Feature: Book API

  Background:
    Given the Book API is available

  @smoke
  Scenario: Create a new book
    Given I have valid book details
    When I send a POST request to create the book
    Then the response status code should be 200
    And the book should be created successfully

  @smoke
  Scenario: Retrieve an existing book
    Given a valid book ID
    When I send a GET request for the book
    Then the response status code should be 200
    And the response should contain the correct book details

  Scenario: Retrieve all books
    When I send a GET request to retrieve all books
    Then the response status code should be 200
    And the response should contain a list of books

  Scenario: Update an existing book
    Given a valid book ID
    When I send a PUT request to update the book
    Then the response status code should be 200
    And the book details should be updated successfully

  Scenario: Delete an existing book
    Given a valid book ID
    When I send a DELETE request for the book
    Then the response status code should be 200

  @negative
  Scenario: Retrieve a non-existing book
    Given a non-existing book ID
    When I send a GET request for the book
    Then the response status code should be 404

  @negative
  Scenario: Update a non-existing book
    Given a non-existing book ID
    When I send a PUT request to update the non-existing book
    Then the response status code should be 200

  @negative
  Scenario: Delete a non-existing book
    Given a non-existing book ID
    When I send a DELETE request for the non-existing book
    Then the response status code should be 200