<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AboutUs extends CI_Controller {

	public function index() {
		$data['main'] = 'about_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>