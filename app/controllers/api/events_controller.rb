class Api::EventsController < ApplicationController
  def show
    @event = Event.find params[:id]
    render json: @event
  end

  def index
    @events = Event.all
    render json: @events
  end

  def create
    @event = Event.create(event_params)

    
    redirect_to api_event_path(@event)
  end

  def update
    @event = Event.find params[:id]
    @event.update(event_params)
    
    # redirect_to api_event_path(@event)
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    # redirect_to api_events_path
  end

  private
  def event_params
      params.require(:event).permit(:event_name, :event_date, :event_time, :event_type)
  end
end
