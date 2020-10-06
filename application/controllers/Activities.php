<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Activities extends CI_Controller {

	public function index() {
		$data['main'] = 'activities_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>