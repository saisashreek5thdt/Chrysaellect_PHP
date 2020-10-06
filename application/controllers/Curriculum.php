<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Curriculum extends CI_Controller {

	public function index() {
		$data['main'] = 'curriculum_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>