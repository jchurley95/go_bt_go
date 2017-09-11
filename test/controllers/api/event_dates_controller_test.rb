require 'test_helper'

class Api::EventDatesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_event_dates_index_url
    assert_response :success
  end

  test "should get show" do
    get api_event_dates_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_event_dates_edit_url
    assert_response :success
  end

  test "should get new" do
    get api_event_dates_new_url
    assert_response :success
  end

end
